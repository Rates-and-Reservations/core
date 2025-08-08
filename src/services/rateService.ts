import prisma from '@/config/database';
import { CreateRateData, UpdateRateData, RateQueryFilters, CreateAddOnData, UpdateAddOnData } from '@/types/rate';

// Rate CRUD operations
export const createRate = async (merchantId: string, data: CreateRateData) => {
  // Verify resource exists and belongs to merchant
  const resource = await prisma.resource.findFirst({
    where: {
      id: data.resourceId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!resource) {
    throw new Error('Resource not found');
  }

  // If this is set as default, unset other default rates for this resource
  if (data.isDefault) {
    await prisma.rate.updateMany({
      where: {
        resourceId: data.resourceId,
        isDeleted: false,
        isDefault: true,
      },
      data: {
        isDefault: false,
      },
    });
  }

  return prisma.rate.create({
    data: {
      ...data,
      merchantId,
    },
    include: {
      resource: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const getRates = async (merchantId: string, filters: RateQueryFilters) => {
  const { page, limit, resourceId, isActive } = filters;
  const skip = (page - 1) * limit;

  const where: any = {
    merchantId,
    isDeleted: false,
  };

  if (resourceId) {
    where.resourceId = resourceId;
  }

  if (isActive !== undefined) {
    where.isActive = isActive;
  }

  const [rates, total] = await Promise.all([
    prisma.rate.findMany({
      where,
      skip,
      take: limit,
      include: {
        resource: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            Booking: {
              where: {
                isDeleted: false,
                currentStatus: { in: ['PENDING', 'CONFIRMED'] },
              },
            },
          },
        },
      },
      orderBy: [
        { isDefault: 'desc' },
        { orderIndex: 'asc' },
        { createdAt: 'desc' },
      ],
    }),
    prisma.rate.count({ where }),
  ]);

  return { 
    rates: rates.map(rate => ({
      ...rate,
      activeBookings: rate._count.Booking,
    })),
    total 
  };
};

export const getRateById = async (rateId: string, merchantId: string) => {
  return prisma.rate.findFirst({
    where: {
      id: rateId,
      merchantId,
      isDeleted: false,
    },
    include: {
      resource: {
        select: {
          id: true,
          name: true,
          capacity: true,
        },
      },
      RateAddOn: {
        include: {
          addOn: true,
        },
        where: {
          isDeleted: false,
        },
      },
      _count: {
        select: {
          Booking: {
            where: {
              isDeleted: false,
              currentStatus: { in: ['PENDING', 'CONFIRMED'] },
            },
          },
        },
      },
    },
  });
};

export const updateRate = async (rateId: string, merchantId: string, data: UpdateRateData) => {
  const rate = await prisma.rate.findFirst({
    where: {
      id: rateId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!rate) {
    throw new Error('Rate not found');
  }

  // If this is set as default, unset other default rates for this resource
  if (data.isDefault === true) {
    await prisma.rate.updateMany({
      where: {
        resourceId: rate.resourceId,
        isDeleted: false,
        isDefault: true,
        NOT: { id: rateId },
      },
      data: {
        isDefault: false,
      },
    });
  }

  return prisma.rate.update({
    where: { id: rateId },
    data: {
      ...data,
      updatedAt: new Date(),
    },
    include: {
      resource: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const deleteRate = async (rateId: string, merchantId: string) => {
  const rate = await prisma.rate.findFirst({
    where: {
      id: rateId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!rate) {
    throw new Error('Rate not found');
  }

  // Check for active bookings using this rate
  const activeBookings = await prisma.booking.count({
    where: {
      rateId,
      isDeleted: false,
      startTime: { gte: new Date() },
      currentStatus: { in: ['PENDING', 'CONFIRMED'] },
    },
  });

  if (activeBookings > 0) {
    throw new Error('Cannot delete rate with active bookings');
  }

  return prisma.rate.update({
    where: { id: rateId },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

// Add-on CRUD operations
export const createAddOn = async (merchantId: string, data: CreateAddOnData) => {
  return prisma.addOn.create({
    data: {
      ...data,
      merchantId,
    },
  });
};

export const getAddOns = async (merchantId: string) => {
  return prisma.addOn.findMany({
    where: {
      merchantId,
      isDeleted: false,
    },
    include: {
      _count: {
        select: {
          RateAddOn: {
            where: {
              isDeleted: false,
            },
          },
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });
};

export const updateAddOn = async (addOnId: string, merchantId: string, data: UpdateAddOnData) => {
  const addOn = await prisma.addOn.findFirst({
    where: {
      id: addOnId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!addOn) {
    throw new Error('Add-on not found');
  }

  return prisma.addOn.update({
    where: { id: addOnId },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
};

export const deleteAddOn = async (addOnId: string, merchantId: string) => {
  const addOn = await prisma.addOn.findFirst({
    where: {
      id: addOnId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!addOn) {
    throw new Error('Add-on not found');
  }

  return prisma.addOn.update({
    where: { id: addOnId },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};
