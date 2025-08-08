import { Prisma, BookingStatus } from '@prisma/client';
import prisma from '@/config/database';
import { 
  CreateBookingData,
  UpdateBookingData,
  BookingQueryFilters,
  BookingAvailabilityCheck,
  BookingAvailabilityResult,
  BookingPricingCalculation,
  BookingStatusUpdate
} from '@/types/booking';
import * as customerService from '@/services/customerService';

/**
 * Core Booking CRUD Operations
 */
export const createBooking = async (merchantId: string, data: CreateBookingData) => {
  // Start transaction for booking creation
  return await prisma.$transaction(async (tx) => {
    let customerId = data.customerId;
    
    // Create customer if needed
    if (!customerId && data.customerData) {
      const customer = await customerService.createCustomer(merchantId, data.customerData);
      customerId = customer.id;
    }
    
    // Validate booking availability
    const availabilityCheck = await checkBookingAvailability(merchantId, {
      resourceId: data.resourceId,
      startTime: data.startTime,
      endTime: data.endTime,
      partySize: data.partySize,
    });
    
    if (!availabilityCheck.isAvailable) {
      throw new Error(`Booking not available: ${availabilityCheck.conflicts?.[0]?.message || 'Unknown conflict'}`);
    }
    
    // Calculate pricing
    const pricing = await calculateBookingPricing(merchantId, {
      resourceId: data.resourceId,
      rateId: data.rateId,
      startTime: data.startTime,
      endTime: data.endTime,
      partySize: data.partySize,
      addOnIds: data.addOnIds || [],
    });
    
    // Create the booking
    const booking = await tx.booking.create({
      data: {
        merchantId,
        customerId,
        resourceId: data.resourceId,
        rateId: data.rateId,
        startTime: data.startTime,
        endTime: data.endTime,
        partySize: data.partySize,
        basePrice: pricing.basePrice,
        totalPrice: pricing.totalPrice,
        taxAmount: pricing.taxAmount,
        currency: pricing.currency,
        currentStatus: data.autoConfirm ? BookingStatus.CONFIRMED : BookingStatus.PENDING,
        notes: data.notes,
        internalNotes: data.internalNotes,
        metadata: (data.metadata ?? Prisma.JsonNull) as unknown as Prisma.InputJsonValue,
      },
      include: {
        customer: true,
        resource: {
          include: {
            serviceLocation: true,
          },
        },
        rate: true,
      },
    });
    
    // Create booking add-ons if any
    if (data.addOnIds && data.addOnIds.length > 0) {
      const addOns = await tx.addOn.findMany({
        where: {
          id: { in: data.addOnIds },
          merchantId,
          isDeleted: false,
          isActive: true,
        },
      });
      
      for (const addOn of addOns) {
        await tx.bookingAddOn.create({
          data: {
            bookingId: booking.id,
            addOnId: addOn.id,
            addOnName: addOn.name,
            quantity: 1, // Default quantity
            unitPrice: addOn.price,
            totalPrice: addOn.price,
          },
        });
        
        // Update inventory if applicable
        if (addOn.hasInventory && addOn.inventoryCount !== null) {
          await tx.addOn.update({
            where: { id: addOn.id },
            data: {
              inventoryCount: Math.max(0, addOn.inventoryCount - 1),
            },
          });
        }
      }
    }
    
    // Update customer statistics
    if (customerId) {
      await tx.customer.update({
        where: { id: customerId },
        data: {
          totalBookings: { increment: 1 },
          totalSpent: { increment: pricing.totalPrice },
          loyaltyPoints: { increment: Math.floor(pricing.totalPrice / 10) }, // 1 point per $10
        },
      });
    }
    
    // Create capacity slot tracking
    await updateCapacitySlots(tx, data.resourceId, data.startTime, data.endTime, data.partySize, 'add');
    
    return booking;
  });
};

export const getBookings = async (merchantId: string, filters: BookingQueryFilters) => {
  const { page, limit, customerId, resourceId, status, startDate, endDate, search, sortBy, sortOrder } = filters;
  const skip = (page - 1) * limit;

  const where: any = {
    merchantId,
    isDeleted: false,
  };

  if (customerId) {
    where.customerId = customerId;
  }

  if (resourceId) {
    where.resourceId = resourceId;
  }

  if (status) {
    where.currentStatus = status;
  }

  if (startDate || endDate) {
    where.startTime = {};
    if (startDate) where.startTime.gte = startDate;
    if (endDate) where.startTime.lte = endDate;
  }

  if (search) {
    where.OR = [
      { notes: { contains: search, mode: 'insensitive' } },
      { customer: { name: { contains: search, mode: 'insensitive' } } },
      { customer: { email: { contains: search, mode: 'insensitive' } } },
    ];
  }

  // Dynamic sorting
  const orderBy: any = {};
  if (sortBy) {
    orderBy[sortBy] = sortOrder || 'desc';
  } else {
    orderBy.startTime = 'asc';
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      skip,
      take: limit,
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        resource: {
          select: {
            id: true,
            name: true,
            capacity: true,
          },
        },
        rate: {
          select: {
            id: true,
            name: true,
            price: true,
            durationType: true,
          },
        },
        BookingAddOn: {
          include: {
            addOn: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          where: { isDeleted: false },
        },
      },
      orderBy,
    }),
    prisma.booking.count({ where }),
  ]);

  const now = new Date();
  
  return { 
    bookings: bookings.map(booking => ({
      ...booking,
      duration: Math.round((booking.endTime.getTime() - booking.startTime.getTime()) / (1000 * 60)),
      isPast: booking.endTime < now,
      addOns: booking.BookingAddOn.map(ba => ({
        id: ba.id,
        addOnId: ba.addOnId,
        addOnName: ba.addOnName,
        quantity: ba.quantity,
        unitPrice: ba.unitPrice,
        totalPrice: ba.totalPrice,
      })),
    })),
    total 
  };
};

export const getBookingById = async (bookingId: string, merchantId: string) => {
  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      merchantId,
      isDeleted: false,
    },
    include: {
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          preferredLanguage: true,
          preferredTimezone: true,
        },
      },
      resource: {
        select: {
          id: true,
          name: true,
          description: true,
          capacity: true,
          minDuration: true,
          maxDuration: true,
          isVirtual: true,
          serviceLocation: {
            select: {
              id: true,
              name: true,
              address: true,
              city: true,
            },
          },
        },
      },
      rate: {
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          currency: true,
          durationType: true,
          taxType: true,
          taxAmount: true,
        },
      },
      BookingAddOn: {
        include: {
          addOn: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        where: { isDeleted: false },
      },
      PaymentActions: {
        where: { isDeleted: false },
        orderBy: { createdAt: 'desc' },
      },
    },
  });

  if (!booking) {
    return null;
  }

  const now = new Date();
  const duration = Math.round((booking.endTime.getTime() - booking.startTime.getTime()) / (1000 * 60));
  
  return {
    ...booking,
    duration,
    isPast: booking.endTime < now,
    isCancellable: booking.currentStatus === BookingStatus.CONFIRMED && booking.startTime > now,
    isModifiable: booking.currentStatus === BookingStatus.PENDING && booking.startTime > new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h before
    addOns: booking.BookingAddOn.map(ba => ({
      id: ba.id,
      addOnId: ba.addOnId || '',
      addOnName: ba.addOnName,
      quantity: ba.quantity,
      unitPrice: ba.unitPrice,
      totalPrice: ba.totalPrice,
    })),
    payments: booking.PaymentActions.map(p => ({
      id: p.id,
      amount: p.amount,
      currency: p.currency,
      status: p.status,
      provider: p.provider,
      providerPaymentId: p.providerPaymentId,
      createdAt: p.createdAt,
    })),
  };
};

export const updateBooking = async (
  bookingId: string,
  merchantId: string,
  data: UpdateBookingData
) => {
  const existingBooking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!existingBooking) {
    throw new Error('Booking not found');
  }

  // Check if booking is modifiable
  const now = new Date();
  if (existingBooking.currentStatus === BookingStatus.COMPLETED || 
      existingBooking.currentStatus === BookingStatus.CANCELLED ||
      existingBooking.startTime <= now) {
    throw new Error('Booking cannot be modified');
  }

  // If time or party size is changing, check availability
  if (data.startTime || data.endTime || data.partySize) {
    const newStartTime = data.startTime || existingBooking.startTime;
    const newEndTime = data.endTime || existingBooking.endTime;
    const newPartySize = data.partySize || existingBooking.partySize;
    
    const availabilityCheck = await checkBookingAvailability(merchantId, {
      resourceId: existingBooking.resourceId,
      startTime: newStartTime,
      endTime: newEndTime,
      partySize: newPartySize,
      excludeBookingId: bookingId,
    });
    
    if (!availabilityCheck.isAvailable) {
      throw new Error(`Updated booking not available: ${availabilityCheck.conflicts?.[0]?.message || 'Unknown conflict'}`);
    }
  }

  return prisma.booking.update({
    where: { id: bookingId },
    data: {
      ...data,
      metadata: (data.metadata ?? existingBooking.metadata ?? Prisma.JsonNull) as Prisma.InputJsonValue,
      updatedAt: new Date(),
    },
    include: {
      customer: true,
      resource: true,
      rate: true,
    },
  });
};

export const updateBookingStatus = async (
  bookingId: string,
  merchantId: string,
  statusUpdate: BookingStatusUpdate
) => {
  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!booking) {
    throw new Error('Booking not found');
  }

  // Validate status transition
  const validTransitions = getValidStatusTransitions(booking.currentStatus);
  if (!validTransitions.includes(statusUpdate.status)) {
    throw new Error(`Cannot change status from ${booking.currentStatus} to ${statusUpdate.status}`);
  }

  return prisma.$transaction(async (tx) => {
    // Update booking status
    const updatedBooking = await tx.booking.update({
      where: { id: bookingId },
      data: {
        currentStatus: statusUpdate.status,
        internalNotes: statusUpdate.internalNotes || booking.internalNotes,
        updatedAt: new Date(),
      },
    });

    // Create booking transition log
    await tx.bookingTransition.create({
      data: {
        bookingId,
        fromStatus: booking.currentStatus,
        toStatus: statusUpdate.status,
        reason: statusUpdate.reason,
        notes: statusUpdate.internalNotes,
      },
    });

    // Handle side effects based on status
    if (statusUpdate.status === BookingStatus.CANCELLED) {
      // Update capacity slots
      await updateCapacitySlots(tx, booking.resourceId, booking.startTime, booking.endTime, booking.partySize, 'remove');
      
      // Restore add-on inventory
      const bookingAddOns = await tx.bookingAddOn.findMany({
        where: { bookingId, isDeleted: false },
        include: { addOn: true },
      });
      
      for (const bookingAddOn of bookingAddOns) {
        if (bookingAddOn.addOn?.hasInventory) {
          await tx.addOn.update({
            where: { id: bookingAddOn.addOnId! },
            data: {
              inventoryCount: { increment: bookingAddOn.quantity },
            },
          });
        }
      }
    }

    return updatedBooking;
  });
};

export const cancelBooking = async (bookingId: string, merchantId: string, reason?: string) => {
  return updateBookingStatus(bookingId, merchantId, {
    status: BookingStatus.CANCELLED,
    reason,
  });
};

export const deleteBooking = async (bookingId: string, merchantId: string) => {
  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!booking) {
    throw new Error('Booking not found');
  }

  // Only allow deletion of pending bookings or cancellation instead
  if (booking.currentStatus === BookingStatus.CONFIRMED) {
    throw new Error('Cannot delete confirmed booking. Cancel it instead.');
  }

  return prisma.booking.update({
    where: { id: bookingId },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

/**
 * Availability and Validation Functions
 */
export const checkBookingAvailability = async (
  merchantId: string,
  check: BookingAvailabilityCheck
): Promise<BookingAvailabilityResult> => {
  const { resourceId, startTime, endTime, partySize, excludeBookingId } = check;

  // Get resource with constraints and availability
  const resource = await prisma.resource.findFirst({
    where: {
      id: resourceId,
      merchantId,
      isDeleted: false,
      isActive: true,
    },
    include: {
      AvailabilityRule: {
        where: { isActive: true, isDeleted: false },
      },
      AvailabilityBlock: {
        where: {
          isActive: true,
          isDeleted: false,
          startTime: { lte: endTime },
          endTime: { gte: startTime },
        },
      },
      BookingConstraint: {
        where: { isActive: true, isDeleted: false },
      },
    },
  });

  if (!resource) {
    return {
      isAvailable: false,
      conflicts: [{ type: 'capacity', message: 'Resource not found or inactive' }],
    };
  }

  const conflicts = [];

  // Check capacity
  if (partySize > resource.capacity) {
    conflicts.push({
      type: 'capacity' as const,
      message: `Party size (${partySize}) exceeds resource capacity (${resource.capacity})`,
    });
  }

  // Check availability blocks
  if (resource.AvailabilityBlock.length > 0) {
    conflicts.push({
      type: 'availability_block' as const,
      message: 'Resource is blocked during requested time',
    });
  }

  // Check existing bookings capacity
  const overlappingBookings = await prisma.booking.findMany({
    where: {
      resourceId,
      isDeleted: false,
      currentStatus: { in: [BookingStatus.PENDING, BookingStatus.CONFIRMED] },
      OR: [
        {
          startTime: { lte: startTime },
          endTime: { gt: startTime },
        },
        {
          startTime: { lt: endTime },
          endTime: { gte: endTime },
        },
        {
          startTime: { gte: startTime },
          endTime: { lte: endTime },
        },
      ],
      ...(excludeBookingId && { id: { not: excludeBookingId } }),
    },
  });

  const usedCapacity = overlappingBookings.reduce((sum, booking) => sum + booking.partySize, 0);
  const availableCapacity = resource.capacity - usedCapacity;

  if (partySize > availableCapacity) {
    conflicts.push({
      type: 'capacity' as const,
      message: `Insufficient capacity. Available: ${availableCapacity}, Requested: ${partySize}`,
    });
  }

  // Check booking constraints
  for (const constraint of resource.BookingConstraint) {
    const constraintCheck = await validateBookingConstraint(constraint, {
      merchantId,
      resourceId,
      startTime,
      endTime,
      partySize,
    });

    if (!constraintCheck.isValid) {
      conflicts.push({
        type: 'booking_constraint' as const,
        message: constraintCheck.message,
        details: constraint,
      });
    }
  }

  return {
    isAvailable: conflicts.length === 0,
    conflicts: conflicts.length > 0 ? conflicts : undefined,
  };
};

export const calculateBookingPricing = async (
  merchantId: string,
  params: {
    resourceId: string;
    rateId: string;
    startTime: Date;
    endTime: Date;
    partySize: number;
    addOnIds: string[];
  }
): Promise<BookingPricingCalculation> => {
  const { resourceId, rateId, startTime, endTime, addOnIds } = params;

  // Get rate information
  const rate = await prisma.rate.findFirst({
    where: {
      id: rateId,
      resourceId,
      merchantId,
      isDeleted: false,
      isActive: true,
    },
  });

  if (!rate) {
    throw new Error('Rate not found or inactive');
  }

  // Calculate duration and base price
  const durationMs = endTime.getTime() - startTime.getTime();
  const durationHours = durationMs / (1000 * 60 * 60);
  
  let basePrice = 0;
  const breakdown = [];

  switch (rate.durationType) {
    case 'PER_HOUR':
      basePrice = Number(rate.price) * durationHours;
      breakdown.push({
        item: `${rate.name} (${durationHours.toFixed(1)} hours)`,
        type: 'rate' as const,
        quantity: durationHours,
        unitPrice: Number(rate.price),
        total: basePrice,
      });
      break;
    case 'PER_DAY':
      const days = Math.ceil(durationHours / 24);
      basePrice = Number(rate.price) * days;
      breakdown.push({
        item: `${rate.name} (${days} days)`,
        type: 'rate' as const,
        quantity: days,
        unitPrice: Number(rate.price),
        total: basePrice,
      });
      break;
    case 'FIXED_PRICE':
      basePrice = Number(rate.price);
      breakdown.push({
        item: rate.name,
        type: 'rate' as const,
        quantity: 1,
        unitPrice: Number(rate.price),
        total: basePrice,
      });
      break;
    default:
      basePrice = Number(rate.price);
  }

  // Calculate add-ons
  let addOnTotal = 0;
  if (addOnIds.length > 0) {
    const addOns = await prisma.addOn.findMany({
      where: {
        id: { in: addOnIds },
        merchantId,
        isDeleted: false,
        isActive: true,
      },
    });

    for (const addOn of addOns) {
      const addOnPrice = Number(addOn.price);
      addOnTotal += addOnPrice;
              breakdown.push({
        item: addOn.name,
        type: 'addon' as const,
        quantity: 1,
        unitPrice: addOnPrice,
        total: addOnPrice,
      });
    }
  }

  // Calculate subtotal
  const subtotal = basePrice + addOnTotal;

  // Calculate tax
  let taxAmount = 0;
  if (rate.taxType === 'PERCENTAGE') {
    taxAmount = (subtotal * Number(rate.taxAmount)) / 100;
  } else if (rate.taxType === 'FIXED') {
    taxAmount = Number(rate.taxAmount);
  }

  if (taxAmount > 0) {
    breakdown.push({
      item: `Tax (${rate.taxType === 'PERCENTAGE' ? rate.taxAmount + '%' : rate.currency + ' ' + rate.taxAmount})`,
      type: 'tax' as const,
      quantity: 1,
      unitPrice: taxAmount,
      total: taxAmount,
    });
  }

  const totalPrice = subtotal + taxAmount;

  return {
    basePrice,
    addOnTotal,
    subtotal,
    taxAmount,
    totalPrice,
    currency: rate.currency,
    breakdown,
  };
};

/**
 * Analytics and Statistics
 */
export const getBookingStats = async (merchantId: string) => {
  const [
    totalBookings,
    confirmedBookings,
    pendingBookings,
    cancelledBookings,
    completedBookings,
    revenueData,
    topResources,
    bookingGrowth,
  ] = await Promise.all([
    // Total bookings
    prisma.booking.count({
      where: { merchantId, isDeleted: false },
    }),

    // Confirmed bookings
    prisma.booking.count({
      where: { merchantId, isDeleted: false, currentStatus: BookingStatus.CONFIRMED },
    }),

    // Pending bookings
    prisma.booking.count({
      where: { merchantId, isDeleted: false, currentStatus: BookingStatus.PENDING },
    }),

    // Cancelled bookings
    prisma.booking.count({
      where: { merchantId, isDeleted: false, currentStatus: BookingStatus.CANCELLED },
    }),

    // Completed bookings
    prisma.booking.count({
      where: { merchantId, isDeleted: false, currentStatus: BookingStatus.COMPLETED },
    }),

    // Revenue data
    prisma.booking.aggregate({
      where: {
        merchantId,
        isDeleted: false,
        currentStatus: { in: [BookingStatus.CONFIRMED, BookingStatus.COMPLETED] },
      },
      _sum: { totalPrice: true },
      _avg: { totalPrice: true },
    }),

    // Top resources by booking count
    prisma.booking.groupBy({
      by: ['resourceId'],
      where: {
        merchantId,
        isDeleted: false,
        currentStatus: { in: [BookingStatus.CONFIRMED, BookingStatus.COMPLETED] },
      },
      _count: { id: true },
      _sum: { totalPrice: true },
      orderBy: { _count: { id: 'desc' } },
      take: 10,
    }),

    // Booking growth over last 6 months
    prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('month', "createdAt") as period,
        COUNT(*) as "bookingCount",
        SUM("totalPrice") as revenue
      FROM "Booking"
      WHERE "merchantId" = ${merchantId}
        AND "isDeleted" = false
        AND "createdAt" >= NOW() - INTERVAL '6 months'
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY period ASC
    `,
  ]);

  // Get resource names for top resources
  const resourceIds = topResources.map(r => r.resourceId);
  const resources = await prisma.resource.findMany({
    where: { id: { in: resourceIds } },
    select: { id: true, name: true, capacity: true },
  });

  const topResourcesWithNames = topResources.map(stat => {
    const resource = resources.find(r => r.id === stat.resourceId);
    return {
      resourceId: stat.resourceId,
      resourceName: resource?.name || 'Unknown Resource',
      bookingCount: stat._count.id,
      revenue: Number(stat._sum.totalPrice || 0),
      utilizationRate: 0, // Would need more complex calculation
    };
  });

  return {
    totalBookings,
    confirmedBookings,
    pendingBookings,
    cancelledBookings,
    completedBookings,
    totalRevenue: Number(revenueData._sum.totalPrice || 0),
    averageBookingValue: Number(revenueData._avg.totalPrice || 0),
    bookingGrowth: bookingGrowth as any[],
    topResources: topResourcesWithNames,
  };
};

/**
 * Calendar and Schedule Functions
 */
export const getBookingCalendar = async (
  merchantId: string,
  startDate: Date,
  endDate: Date,
  resourceIds?: string[]
) => {
  const where: any = {
    merchantId,
    isDeleted: false,
    currentStatus: { in: [BookingStatus.PENDING, BookingStatus.CONFIRMED] },
    startTime: { lte: endDate },
    endTime: { gte: startDate },
  };

  if (resourceIds && resourceIds.length > 0) {
    where.resourceId = { in: resourceIds };
  }

  const bookings = await prisma.booking.findMany({
    where,
    include: {
      customer: {
        select: { name: true },
      },
      resource: {
        select: { name: true },
      },
    },
    orderBy: { startTime: 'asc' },
  });

  const events = bookings.map(booking => ({
    id: booking.id,
    title: `${booking.customer?.name || 'Guest'} - ${booking.resource.name}`,
    start: booking.startTime,
    end: booking.endTime,
    resourceId: booking.resourceId,
    resourceName: booking.resource.name,
    customerName: booking.customer?.name,
    status: booking.currentStatus,
    color: getStatusColor(booking.currentStatus),
    allDay: false,
  }));

  // Get unique resources for the response
  const uniqueResourceIds = [...new Set(bookings.map(b => b.resourceId))];
  const resources = await prisma.resource.findMany({
    where: { id: { in: uniqueResourceIds } },
    select: { id: true, name: true },
  });

  return {
    events,
    dateRange: { start: startDate, end: endDate },
    resources: resources.map(r => ({
      id: r.id,
      name: r.name,
      color: generateResourceColor(r.id),
    })),
  };
};

/**
 * Helper Functions
 */
const updateCapacitySlots = async (
  tx: any,
  resourceId: string,
  startTime: Date,
  endTime: Date,
  partySize: number,
  operation: 'add' | 'remove'
) => {
  // This is a simplified version - in production you might want more granular slots
  const existingSlot = await tx.capacitySlot.findFirst({
    where: {
      resourceId,
      startTime: { lte: startTime },
      endTime: { gte: endTime },
    },
  });

  const increment = operation === 'add' ? partySize : -partySize;

  if (existingSlot) {
    await tx.capacitySlot.update({
      where: { id: existingSlot.id },
      data: {
        bookedCount: { increment },
      },
    });
  } else {
    // Create new capacity slot if none exists
    const resource = await tx.resource.findFirst({
      where: { id: resourceId },
      select: { capacity: true },
    });

    await tx.capacitySlot.create({
      data: {
        resourceId,
        startTime,
        endTime,
        totalCapacity: resource?.capacity || 1,
        bookedCount: Math.max(0, increment),
      },
    });
  }
};

const validateBookingConstraint = async (
  constraint: any,
  bookingData: {
    merchantId: string;
    resourceId: string;
    startTime: Date;
    endTime: Date;
    partySize: number;
  }
): Promise<{ isValid: boolean; message: string }> => {
  const { merchantId, resourceId, startTime, partySize } = bookingData;
  
  switch (constraint.constraintType) {
    case 'MIN_ADVANCE_BOOKING':
      const minAdvanceHours = constraint.value.hours || 0;
      const hoursUntilBooking = (startTime.getTime() - Date.now()) / (1000 * 60 * 60);
      if (hoursUntilBooking < minAdvanceHours) {
        return {
          isValid: false,
          message: `Booking must be made at least ${minAdvanceHours} hours in advance`,
        };
      }
      break;

    case 'MAX_ADVANCE_BOOKING':
      const maxAdvanceHours = constraint.value.hours || 24 * 365; // Default 1 year
      const hoursInAdvance = (startTime.getTime() - Date.now()) / (1000 * 60 * 60);
      if (hoursInAdvance > maxAdvanceHours) {
        return {
          isValid: false,
          message: `Booking cannot be made more than ${maxAdvanceHours} hours in advance`,
        };
      }
      break;

    case 'MINIMUM_PARTY_SIZE':
      const minPartySize = constraint.value.count || 1;
      if (partySize < minPartySize) {
        return {
          isValid: false,
          message: `Minimum party size is ${minPartySize}`,
        };
      }
      break;

    case 'MAXIMUM_PARTY_SIZE':
      const maxPartySize = constraint.value.count || 100;
      if (partySize > maxPartySize) {
        return {
          isValid: false,
          message: `Maximum party size is ${maxPartySize}`,
        };
      }
      break;

    case 'BLACKOUT_DATES':
      const blackoutDates = constraint.value as string[];
      const bookingDateStr = startTime.toISOString().split('T')[0];
      if (blackoutDates.includes(bookingDateStr)) {
        return {
          isValid: false,
          message: 'Booking not allowed on this date',
        };
      }
      break;
  }

  return { isValid: true, message: '' };
};

const getValidStatusTransitions = (currentStatus: BookingStatus): BookingStatus[] => {
  switch (currentStatus) {
    case BookingStatus.PENDING:
      return [BookingStatus.CONFIRMED, BookingStatus.CANCELLED];
    case BookingStatus.CONFIRMED:
      return [BookingStatus.COMPLETED, BookingStatus.CANCELLED, BookingStatus.NO_SHOW];
    case BookingStatus.COMPLETED:
      return []; // Terminal status
    case BookingStatus.CANCELLED:
      return []; // Terminal status
    case BookingStatus.NO_SHOW:
      return [BookingStatus.COMPLETED]; // Can still mark as completed if they show up late
    default:
      return [];
  }
};

const getStatusColor = (status: BookingStatus): string => {
  switch (status) {
    case BookingStatus.PENDING:
      return '#f59e0b'; // Yellow
    case BookingStatus.CONFIRMED:
      return '#10b981'; // Green
    case BookingStatus.COMPLETED:
      return '#6b7280'; // Gray
    case BookingStatus.CANCELLED:
      return '#ef4444'; // Red
    case BookingStatus.NO_SHOW:
      return '#f97316'; // Orange
    default:
      return '#3b82f6'; // Blue
  }
};

const generateResourceColor = (resourceId: string): string => {
  // Generate consistent color based on resource ID
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  const index = resourceId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};
