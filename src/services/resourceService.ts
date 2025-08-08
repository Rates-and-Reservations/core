import { Prisma } from '@prisma/client';
import prisma from '@/config/database';
import { 
  CreateResourceData, 
  UpdateResourceData,
  ResourceQueryFilters,
  CreateAvailabilityBlockData,
  UpdateAvailabilityBlockData,
  CreateAvailabilityRuleData,
  UpdateAvailabilityRuleData,
  CreateBookingConstraintData,
  UpdateBookingConstraintData,
  ResourceAvailability,
  AvailabilitySlot,
  CreateResourceAssetData,
  UpdateResourceAssetData
} from '@/types/resource';

/**
 * Core Resource CRUD Operations
 */
export const createResource = async (merchantId: string, data: CreateResourceData) => {
  return prisma.resource.create({
    data: {
      ...data,
      merchantId,
      tags: data.tags || [],
      location: (data.location ?? Prisma.JsonNull) as unknown as Prisma.InputJsonValue,
      serviceArea: (data.serviceArea ?? Prisma.JsonNull) as unknown as Prisma.InputJsonValue,
      metadata: (data.metadata ?? Prisma.JsonNull) as unknown as Prisma.InputJsonValue,
    },
    include: {
      template: {
        select: {
          id: true,
          name: true,
          category: true,
        },
      },
      serviceLocation: {
        select: {
          id: true,
          name: true,
          city: true,
          country: true,
        },
      },
    },
  });
};

export const getResources = async (merchantId: string, filters: ResourceQueryFilters) => {
  const { page, limit, search, isActive } = filters;
  const skip = (page - 1) * limit;

  const where: any = {
    merchantId,
    isDeleted: false,
  };

  if (isActive !== undefined) {
    where.isActive = isActive;
  }

  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { tags: { has: search } },
    ];
  }

  const [resources, total] = await Promise.all([
    prisma.resource.findMany({
      where,
      skip,
      take: limit,
      include: {
        template: {
          select: {
            id: true,
            name: true,
            category: true,
          },
        },
        serviceLocation: {
          select: {
            id: true,
            name: true,
            city: true,
            country: true,
          },
        },
        Rate: {
          where: { isDeleted: false, isActive: true },
          select: {
            id: true,
            name: true,
            price: true,
            currency: true,
            durationType: true,
            isDefault: true,
          },
          orderBy: [
            { isDefault: 'desc' },
            { orderIndex: 'asc' },
          ],
        },
        _count: {
          select: {
            Booking: { 
              where: { 
                isDeleted: false,
                currentStatus: { in: ['PENDING', 'CONFIRMED'] }
              }
            },
            Rate: { where: { isDeleted: false } },
          },
        },
      },
      orderBy: [
        { isActive: 'desc' },
        { createdAt: 'desc' },
      ],
    }),
    prisma.resource.count({ where }),
  ]);

  return { 
    resources: resources.map(resource => ({
      ...resource,
      bookingCount: resource._count.Booking,
      rateCount: resource._count.Rate,
    })),
    total 
  };
};

export const getResourceById = async (resourceId: string, merchantId: string) => {
  const resource = await prisma.resource.findFirst({
    where: {
      id: resourceId,
      merchantId,
      isDeleted: false,
    },
    include: {
      template: {
        select: {
          id: true,
          name: true,
          category: true,
          description: true,
        },
      },
      serviceLocation: {
        select: {
          id: true,
          name: true,
          address: true,
          city: true,
          country: true,
          latitude: true,
          longitude: true,
        },
      },
      Rate: {
        where: { isDeleted: false },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          currency: true,
          durationType: true,
          isDefault: true,
          isActive: true,
          isPublished: true,
          validFrom: true,
          validTo: true,
        },
        orderBy: [
          { isDefault: 'desc' },
          { orderIndex: 'asc' },
        ],
      },
      AvailabilityBlock: {
        where: { isDeleted: false },
        orderBy: { startTime: 'asc' },
      },
      AvailabilityRule: {
        where: { isDeleted: false },
        orderBy: { dayOfWeek: 'asc' },
      },
      BookingConstraint: {
        where: { isDeleted: false },
        orderBy: { constraintType: 'asc' },
      },
      ResourceAsset: {
        where: { isDeleted: false },
        include: {
          asset: {
            select: {
              id: true,
              name: true,
              type: true,
              url: true,
              publicId: true,
              createdAt: true,
            },
          },
        },
        orderBy: [
          { isPrimary: 'desc' },
          { sortOrder: 'asc' },
          { createdAt: 'asc' },
        ],
      },
      _count: {
        select: {
          Booking: {
            where: {
              isDeleted: false,
              startTime: { gte: new Date() },
              currentStatus: { in: ['PENDING', 'CONFIRMED'] },
            },
          },
        },
      },
    },
  });

  if (!resource) {
    return null;
  }

  return {
    ...resource,
    upcomingBookings: resource._count.Booking,
    assets: resource.ResourceAsset.map(ra => ({
      id: ra.id,
      name: ra.asset.name,
      type: ra.asset.type,
      url: ra.asset.url,
      publicId: ra.asset.publicId,
      isPrimary: ra.isPrimary,
      sortOrder: ra.sortOrder,
      createdAt: ra.asset.createdAt,
    })),
  };
};

export const updateResource = async (
  resourceId: string,
  merchantId: string,
  data: UpdateResourceData
) => {
  const resource = await prisma.resource.findFirst({
    where: {
      id: resourceId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.resource.update({
    where: { id: resourceId },
    data: {
      ...data,
      location: (data.location ?? resource.location ?? Prisma.JsonNull) as Prisma.InputJsonValue,
      serviceArea: (data.serviceArea ?? resource.serviceArea ?? Prisma.JsonNull) as Prisma.InputJsonValue,
      metadata: (data.metadata ?? resource.metadata ?? Prisma.JsonNull) as Prisma.InputJsonValue,
      tags: data.tags || resource.tags,
      updatedAt: new Date(),
    },
    include: {
      template: {
        select: {
          id: true,
          name: true,
          category: true,
        },
      },
      serviceLocation: {
        select: {
          id: true,
          name: true,
          city: true,
        },
      },
    },
  });
};

export const deleteResource = async (resourceId: string, merchantId: string) => {
  const resource = await prisma.resource.findFirst({
    where: {
      id: resourceId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // Check for active bookings
  const activeBookings = await prisma.booking.count({
    where: {
      resourceId,
      isDeleted: false,
      startTime: { gte: new Date() },
      currentStatus: { in: ['PENDING', 'CONFIRMED'] },
    },
  });

  if (activeBookings > 0) {
    throw new Error('Cannot delete resource with active future bookings');
  }

  // Soft delete the resource
  return prisma.resource.update({
    where: { id: resourceId },
    data: {
      isDeleted: true,
      isActive: false,
      deletedAt: new Date(),
    },
  });
};

/**
 * Availability Management
 */
export const getResourceAvailability = async (
  resourceId: string,
  merchantId: string,
  startDate: Date,
  endDate: Date
): Promise<ResourceAvailability> => {
  // Get resource with availability rules and blocks
  const resource = await prisma.resource.findFirst({
    where: {
      id: resourceId,
      merchantId,
      isDeleted: false,
    },
    include: {
      AvailabilityRule: {
        where: {
          isDeleted: false,
          isActive: true,
          OR: [
            { validFrom: null, validTo: null },
            { validFrom: { lte: endDate }, validTo: { gte: startDate } },
          ],
        },
      },
      AvailabilityBlock: {
        where: {
          isDeleted: false,
          isActive: true,
          startTime: { lte: endDate },
          endTime: { gte: startDate },
        },
      },
      Booking: {
        where: {
          isDeleted: false,
          startTime: { lte: endDate },
          endTime: { gte: startDate },
          currentStatus: { in: ['PENDING', 'CONFIRMED'] },
        },
        select: {
          startTime: true,
          endTime: true,
          partySize: true,
        },
      },
    },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // Calculate availability slots
  const availabilitySlots = calculateAvailabilitySlots(
    resource,
    startDate,
    endDate
  );

  return {
    resourceId,
    startDate,
    endDate,
    capacity: resource.capacity,
    availabilitySlots,
    availabilityRules: resource.AvailabilityRule.map(rule => ({
      id: rule.id,
      dayOfWeek: rule.dayOfWeek,
      startTime: rule.startTime,
      endTime: rule.endTime,
      validFrom: rule.validFrom === null ? undefined : rule.validFrom,
      validTo: rule.validTo === null ? undefined : rule.validTo,
      isActive: rule.isActive,
    })),
    blockedPeriods: resource.AvailabilityBlock.map(block => ({
      id: block.id,
      startTime: block.startTime,
      endTime: block.endTime,
      blockType: block.blockType,
      reason: block.reason === null ? undefined : block.reason,
      isRecurring: block.isRecurring,
      isActive: block.isActive,
    })),
    existingBookings: resource.Booking,
  };
};

// Helper function to calculate availability slots
const calculateAvailabilitySlots = (resource: any, startDate: Date, endDate: Date): AvailabilitySlot[] => {
  const slots: AvailabilitySlot[] = [];
  const current = new Date(startDate);
  current.setHours(0, 0, 0, 0); // Start at beginning of day
  
  while (current <= endDate) {
    const dayOfWeek = current.getDay();
    
    // Find applicable availability rule for this day
    const rule = resource.AvailabilityRule.find((r: any) => 
      r.dayOfWeek === dayOfWeek &&
      r.isActive &&
      (!r.validFrom || r.validFrom <= current) &&
      (!r.validTo || r.validTo >= current)
    );

    if (rule) {
      // Create time slots based on resource duration settings
      const startHour = parseInt(rule.startTime.split(':')[0]);
      const startMinute = parseInt(rule.startTime.split(':')[1]);
      const endHour = parseInt(rule.endTime.split(':')[0]);
      const endMinute = parseInt(rule.endTime.split(':')[1]);
      
      const dayStart = new Date(current);
      dayStart.setHours(startHour, startMinute, 0, 0);
      
      const dayEnd = new Date(current);
      dayEnd.setHours(endHour, endMinute, 0, 0);
      
      // Create slots based on minimum duration
      const slotDuration = resource.minDuration; // in minutes
      let slotStart = new Date(dayStart);
      
      while (slotStart < dayEnd) {
        const slotEnd = new Date(slotStart);
        slotEnd.setMinutes(slotEnd.getMinutes() + slotDuration);
        
        if (slotEnd > dayEnd) break;
        
        // Check if this time slot is blocked
        const isBlocked = resource.AvailabilityBlock.some((block: any) =>
          (slotStart >= block.startTime && slotStart < block.endTime) ||
          (slotEnd > block.startTime && slotEnd <= block.endTime) ||
          (slotStart <= block.startTime && slotEnd >= block.endTime)
        );

        // Calculate current capacity usage
        const overlappingBookings = resource.Booking.filter((booking: any) =>
          (slotStart >= booking.startTime && slotStart < booking.endTime) ||
          (slotEnd > booking.startTime && slotEnd <= booking.endTime) ||
          (slotStart <= booking.startTime && slotEnd >= booking.endTime)
        );
        
        const usedCapacity = overlappingBookings.reduce(
          (sum: number, booking: any) => sum + booking.partySize, 
          0
        );

        const blockedBy = resource.AvailabilityBlock.find((block: any) =>
          (slotStart >= block.startTime && slotStart < block.endTime) ||
          (slotEnd > block.startTime && slotEnd <= block.endTime) ||
          (slotStart <= block.startTime && slotEnd >= block.endTime)
        );

        slots.push({
          date: new Date(slotStart),
          dayOfWeek,
          startTime: rule.startTime,
          endTime: rule.endTime,
          isAvailable: !isBlocked && usedCapacity < resource.capacity,
          totalCapacity: resource.capacity,
          usedCapacity,
          availableCapacity: Math.max(0, resource.capacity - usedCapacity),
          isBlocked,
          blockedReason: blockedBy?.reason,
        });

        // Move to next slot
        slotStart.setMinutes(slotStart.getMinutes() + slotDuration + resource.bufferTime);
      }
    }

    current.setDate(current.getDate() + 1);
  }

  return slots;
};

/**
 * Availability Blocks Management
 */
export const createAvailabilityBlock = async (
  resourceId: string,
  merchantId: string,
  data: CreateAvailabilityBlockData
) => {
  // Verify resource ownership
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // Check for overlapping blocks if needed
  const overlappingBlock = await prisma.availabilityBlock.findFirst({
    where: {
      resourceId,
      isDeleted: false,
      isActive: true,
      OR: [
        {
          startTime: { lte: data.startTime },
          endTime: { gt: data.startTime },
        },
        {
          startTime: { lt: data.endTime },
          endTime: { gte: data.endTime },
        },
        {
          startTime: { gte: data.startTime },
          endTime: { lte: data.endTime },
        },
      ],
    },
  });

  if (overlappingBlock) {
    throw new Error('Availability block overlaps with existing block');
  }

  return prisma.availabilityBlock.create({
    data: {
      ...data,
      resourceId,
      recurrenceRule: (data.recurrenceRule ?? null) as unknown as Prisma.InputJsonValue,
    },
  });
};

export const getAvailabilityBlocks = async (resourceId: string, merchantId: string) => {
  // Verify resource ownership
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.availabilityBlock.findMany({
    where: {
      resourceId,
      isDeleted: false,
    },
    orderBy: { startTime: 'asc' },
  });
};

export const updateAvailabilityBlock = async (
  blockId: string,
  resourceId: string,
  merchantId: string,
  data: UpdateAvailabilityBlockData
) => {
  // Verify resource ownership
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // Verify block exists and belongs to resource
  const existingBlock = await prisma.availabilityBlock.findFirst({
    where: {
      id: blockId,
      resourceId,
      isDeleted: false,
    },
  });

  if (!existingBlock) {
    throw new Error('Availability block not found');
  }

  return prisma.availabilityBlock.update({
    where: { id: blockId },
    data: {
      ...data,
      recurrenceRule: (data.recurrenceRule ?? existingBlock.recurrenceRule ?? Prisma.JsonNull) as Prisma.InputJsonValue,
    },
  });
};

export const deleteAvailabilityBlock = async (
  blockId: string,
  resourceId: string,
  merchantId: string
) => {
  // Verify resource ownership
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.availabilityBlock.update({
    where: {
      id: blockId,
      resourceId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

/**
 * Availability Rules Management
 */
export const createAvailabilityRule = async (
  resourceId: string,
  merchantId: string,
  data: CreateAvailabilityRuleData
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // Check for existing rule for the same day
  const existingRule = await prisma.availabilityRule.findFirst({
    where: {
      resourceId,
      dayOfWeek: data.dayOfWeek,
      isDeleted: false,
      isActive: true,
      OR: [
        { validFrom: null, validTo: null },
        {
          validFrom: { lte: data.validTo || new Date('2099-12-31') },
          validTo: { gte: data.validFrom || new Date('1970-01-01') },
        },
      ],
    },
  });

  if (existingRule) {
    throw new Error('Availability rule for this day already exists in the specified period');
  }

  return prisma.availabilityRule.create({
    data: {
      ...data,
      resourceId,
    },
  });
};

export const getAvailabilityRules = async (resourceId: string, merchantId: string) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.availabilityRule.findMany({
    where: {
      resourceId,
      isDeleted: false,
    },
    orderBy: [
      { dayOfWeek: 'asc' },
      { validFrom: 'asc' },
    ],
  });
};

export const updateAvailabilityRule = async (
  ruleId: string,
  resourceId: string,
  merchantId: string,
  data: UpdateAvailabilityRuleData
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  const existingRule = await prisma.availabilityRule.findFirst({
    where: {
      id: ruleId,
      resourceId,
      isDeleted: false,
    },
  });

  if (!existingRule) {
    throw new Error('Availability rule not found');
  }

  return prisma.availabilityRule.update({
    where: { id: ruleId },
    data: {
      ...data,
    },
  });
};

export const deleteAvailabilityRule = async (
  ruleId: string,
  resourceId: string,
  merchantId: string
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.availabilityRule.update({
    where: {
      id: ruleId,
      resourceId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

/**
 * Booking Constraints Management
 */
export const createBookingConstraint = async (
  resourceId: string,
  merchantId: string,
  data: CreateBookingConstraintData
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // Check for existing constraint of the same type
  const existingConstraint = await prisma.bookingConstraint.findFirst({
    where: {
      resourceId,
      constraintType: data.constraintType,
      isDeleted: false,
      isActive: true,
    },
  });

  if (existingConstraint) {
    throw new Error('A constraint of this type already exists for this resource');
  }

  return prisma.bookingConstraint.create({
    data: {
      ...data,
      resourceId,
      value: data.value as unknown as Prisma.InputJsonValue,
    },
  });
};

export const getBookingConstraints = async (resourceId: string, merchantId: string) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.bookingConstraint.findMany({
    where: {
      resourceId,
      isDeleted: false,
    },
    orderBy: { constraintType: 'asc' },
  });
};

export const updateBookingConstraint = async (
  constraintId: string,
  resourceId: string,
  merchantId: string,
  data: UpdateBookingConstraintData
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  const existingConstraint = await prisma.bookingConstraint.findFirst({
    where: {
      id: constraintId,
      resourceId,
      isDeleted: false,
    },
  });

  if (!existingConstraint) {
    throw new Error('Booking constraint not found');
  }

  return prisma.bookingConstraint.update({
    where: { id: constraintId },
    data: {
      ...data,
      value: data.value as unknown as Prisma.InputJsonValue,
    },
  });
};

export const deleteBookingConstraint = async (
  constraintId: string,
  resourceId: string,
  merchantId: string
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.bookingConstraint.update({
    where: {
      id: constraintId,
      resourceId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

/**
 * Resource Assets Management
 */
export const uploadResourceAsset = async (
  resourceId: string,
  merchantId: string,
  data: CreateResourceAssetData
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // If this is set as primary, unset other primary assets
  if (data.isPrimary) {
    await prisma.resourceAsset.updateMany({
      where: {
        resourceId,
        isDeleted: false,
        isPrimary: true,
      },
      data: {
        isPrimary: false,
      },
    });
  }

  // Create merchant asset first
  const merchantAsset = await prisma.merchantAsset.create({
    data: {
      merchantId,
      name: data.name,
      type: data.type,
      url: data.url,
      publicId: data.publicId,
    },
  });

  // Link to resource
  return prisma.resourceAsset.create({
    data: {
      resourceId,
      assetId: merchantAsset.id,
      isPrimary: data.isPrimary || false,
      sortOrder: data.sortOrder || 0,
    },
    include: {
      asset: {
        select: {
          id: true,
          name: true,
          type: true,
          url: true,
          publicId: true,
          createdAt: true,
        },
      },
    },
  });
};

export const getResourceAssets = async (resourceId: string, merchantId: string) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  return prisma.resourceAsset.findMany({
    where: {
      resourceId,
      isDeleted: false,
    },
    include: {
      asset: {
        select: {
          id: true,
          name: true,
          type: true,
          url: true,
          publicId: true,
          createdAt: true,
        },
      },
    },
    orderBy: [
      { isPrimary: 'desc' },
      { sortOrder: 'asc' },
      { createdAt: 'asc' },
    ],
  });
};

export const updateResourceAsset = async (
  assetId: string,
  resourceId: string,
  merchantId: string,
  data: UpdateResourceAssetData
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  const existingAsset = await prisma.resourceAsset.findFirst({
    where: {
      id: assetId,
      resourceId,
      isDeleted: false,
    },
  });

  if (!existingAsset) {
    throw new Error('Resource asset not found');
  }

  // If this is set as primary, unset other primary assets
  if (data.isPrimary === true) {
    await prisma.resourceAsset.updateMany({
      where: {
        resourceId,
        isDeleted: false,
        isPrimary: true,
        NOT: { id: assetId },
      },
      data: {
        isPrimary: false,
      },
    });
  }

  return prisma.resourceAsset.update({
    where: { id: assetId },
    data,
    include: {
      asset: {
        select: {
          id: true,
          name: true,
          type: true,
          url: true,
          publicId: true,
          createdAt: true,
        },
      },
    },
  });
};

export const deleteResourceAsset = async (
  assetId: string,
  resourceId: string,
  merchantId: string
) => {
  const resource = await prisma.resource.findFirst({
    where: { id: resourceId, merchantId, isDeleted: false },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // Soft delete the resource asset
  const deletedAsset = await prisma.resourceAsset.update({
    where: {
      id: assetId,
      resourceId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });

  // Also soft delete the merchant asset if it's only used by this resource
  const assetUsageCount = await prisma.resourceAsset.count({
    where: {
      assetId: deletedAsset.assetId,
      isDeleted: false,
    },
  });

  if (assetUsageCount === 0) {
    await prisma.merchantAsset.update({
      where: { id: deletedAsset.assetId },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });
  }

  return deletedAsset;
};
