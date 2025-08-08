import { Prisma } from '@prisma/client';
import prisma from '@/config/database';
import { 
  CreateCustomerData, 
  UpdateCustomerData,
  CustomerQueryFilters,
  CreateCustomerPreferenceData,
  UpdateCustomerPreferenceData
} from '@/types/customer';

/**
 * Customer CRUD Operations
 */
export const createCustomer = async (merchantId: string, data: CreateCustomerData) => {
  // Check if customer with this email already exists for this merchant
  const existingCustomer = await prisma.customer.findUnique({
    where: {
      merchantId_email: {
        merchantId,
        email: data.email,
      },
      isDeleted: false,
    },
  });

  if (existingCustomer) {
    throw new Error('Customer with this email already exists');
  }

  return prisma.customer.create({
    data: {
      ...data,
      merchantId,
      tags: data.tags || [],
      metadata: (data.metadata ?? Prisma.JsonNull) as unknown as Prisma.InputJsonValue,
    },
  });
};

export const getCustomers = async (merchantId: string, filters: CustomerQueryFilters) => {
  const { page, limit, search, tags, sortBy, sortOrder } = filters;
  const skip = (page - 1) * limit;

  const where: any = {
    merchantId,
    isDeleted: false,
  };

  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
      { phone: { contains: search, mode: 'insensitive' } },
      { city: { contains: search, mode: 'insensitive' } },
    ];
  }

  if (tags && tags.length > 0) {
    where.tags = {
      hasSome: tags,
    };
  }

  // Dynamic sorting
  const orderBy: any = {};
  if (sortBy) {
    orderBy[sortBy] = sortOrder || 'desc';
  } else {
    orderBy.createdAt = 'desc';
  }

  const [customers, total] = await Promise.all([
    prisma.customer.findMany({
      where,
      skip,
      take: limit,
      include: {
        _count: {
          select: {
            Booking: { 
              where: { 
                isDeleted: false 
              }
            },
          },
        },
      },
      orderBy,
    }),
    prisma.customer.count({ where }),
  ]);

  return { 
    customers: customers.map(customer => ({
      ...customer,
      bookingCount: customer._count.Booking,
    })),
    total 
  };
};

export const getCustomerById = async (customerId: string, merchantId: string) => {
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      merchantId,
      isDeleted: false,
    },
    include: {
      Booking: {
        where: { isDeleted: false },
        include: {
          resource: {
            select: {
              id: true,
              name: true,
            },
          },
          rate: {
            select: {
              id: true,
              name: true,
              price: true,
              currency: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        take: 10, // Last 10 bookings
      },
      CustomerPreference: {
        where: { isDeleted: false },
      },
      _count: {
        select: {
          Booking: { 
            where: { 
              isDeleted: false 
            }
          },
          WaitlistEntry: {
            where: {
              isDeleted: false,
              currentStatus: 'ACTIVE',
            },
          },
        },
      },
    },
  });

  if (!customer) {
    return null;
  }

  return {
    ...customer,
    bookingCount: customer._count.Booking,
    activeWaitlistEntries: customer._count.WaitlistEntry,
    preferences: customer.CustomerPreference.reduce((acc, pref) => {
      acc[pref.key] = pref.value;
      return acc;
    }, {} as Record<string, string>),
  };
};

export const getCustomerByEmail = async (email: string, merchantId: string) => {
  return prisma.customer.findUnique({
    where: {
      merchantId_email: {
        merchantId,
        email,
      },
      isDeleted: false,
    },
  });
};

export const updateCustomer = async (
  customerId: string,
  merchantId: string,
  data: UpdateCustomerData
) => {
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  // Check for email uniqueness if email is being updated
  if (data.email && data.email !== customer.email) {
    const existingCustomer = await prisma.customer.findUnique({
      where: {
        merchantId_email: {
          merchantId,
          email: data.email,
        },
        isDeleted: false,
      },
    });

    if (existingCustomer) {
      throw new Error('Customer with this email already exists');
    }
  }

  return prisma.customer.update({
    where: { id: customerId },
    data: {
      ...data,
      tags: data.tags || customer.tags,
      metadata: (data.metadata ?? customer.metadata ?? Prisma.JsonNull) as Prisma.InputJsonValue,
      updatedAt: new Date(),
    },
  });
};

export const deleteCustomer = async (customerId: string, merchantId: string) => {
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  // Check for active bookings
  const activeBookings = await prisma.booking.count({
    where: {
      customerId,
      isDeleted: false,
      startTime: { gte: new Date() },
      currentStatus: { in: ['PENDING', 'CONFIRMED'] },
    },
  });

  if (activeBookings > 0) {
    throw new Error('Cannot delete customer with active future bookings');
  }

  // Soft delete the customer
  return prisma.customer.update({
    where: { id: customerId },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

/**
 * Customer Preferences Management
 */
export const createCustomerPreference = async (
  customerId: string,
  merchantId: string,
  data: CreateCustomerPreferenceData
) => {
  // Verify customer exists and belongs to merchant
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  // Check if preference already exists
  const existingPreference = await prisma.customerPreference.findUnique({
    where: {
      customerId_key: {
        customerId,
        key: data.key,
      },
    },
  });

  if (existingPreference) {
    // Update existing preference
    return prisma.customerPreference.update({
      where: {
        customerId_key: {
          customerId,
          key: data.key,
        },
      },
      data: {
        value: data.value,
        updatedAt: new Date(),
      },
    });
  }

  // Create new preference
  return prisma.customerPreference.create({
    data: {
      customerId,
      key: data.key,
      value: data.value,
    },
  });
};

export const getCustomerPreferences = async (customerId: string, merchantId: string) => {
  // Verify customer exists and belongs to merchant
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  const preferences = await prisma.customerPreference.findMany({
    where: { customerId },
    orderBy: { key: 'asc' },
  });

  // Return as key-value object for easier use
  return preferences.reduce((acc, pref) => {
    acc[pref.key] = pref.value;
    return acc;
  }, {} as Record<string, string>);
};

export const updateCustomerPreference = async (
  customerId: string,
  merchantId: string,
  key: string,
  data: UpdateCustomerPreferenceData
) => {
  // Verify customer exists and belongs to merchant
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  return prisma.customerPreference.update({
    where: {
      customerId_key: {
        customerId,
        key,
      },
    },
    data: {
      value: data.value,
      updatedAt: new Date(),
    },
  });
};

export const deleteCustomerPreference = async (
  customerId: string,
  merchantId: string,
  key: string
) => {
  // Verify customer exists and belongs to merchant
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      merchantId,
      isDeleted: false,
    },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  return prisma.customerPreference.delete({
    where: {
      customerId_key: {
        customerId,
        key,
      },
    },
  });
};

/**
 * Customer Analytics and Statistics
 */
export const getCustomerStats = async (merchantId: string) => {
  const [
    totalCustomers,
    newCustomersThisMonth,
    topCustomers,
    customerGrowth,
  ] = await Promise.all([
    // Total customers
    prisma.customer.count({
      where: {
        merchantId,
        isDeleted: false,
      },
    }),

    // New customers this month
    prisma.customer.count({
      where: {
        merchantId,
        isDeleted: false,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    }),

    // Top customers by booking count
    prisma.customer.findMany({
      where: {
        merchantId,
        isDeleted: false,
      },
      include: {
        _count: {
          select: {
            Booking: {
              where: { isDeleted: false },
            },
          },
        },
      },
      orderBy: {
        totalBookings: 'desc',
      },
      take: 10,
    }),

    // Customer growth over last 6 months
    prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('month', "createdAt") as month,
        COUNT(*) as count
      FROM "Customer"
      WHERE "merchantId" = ${merchantId}
        AND "isDeleted" = false
        AND "createdAt" >= NOW() - INTERVAL '6 months'
      GROUP BY DATE_TRUNC('month', "createdAt")
      ORDER BY month ASC
    `,
  ]);

  return {
    totalCustomers,
    newCustomersThisMonth,
    topCustomers: topCustomers.map(customer => ({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      bookingCount: customer._count.Booking,
      totalSpent: customer.totalSpent,
      loyaltyPoints: customer.loyaltyPoints,
    })),
    customerGrowth,
  };
};

/**
 * Customer Search and Filtering
 */
export const searchCustomers = async (
  merchantId: string,
  searchTerm: string,
  limit: number = 10
) => {
  return prisma.customer.findMany({
    where: {
      merchantId,
      isDeleted: false,
      OR: [
        { name: { contains: searchTerm, mode: 'insensitive' } },
        { email: { contains: searchTerm, mode: 'insensitive' } },
        { phone: { contains: searchTerm, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      totalBookings: true,
      totalSpent: true,
    },
    take: limit,
    orderBy: [
      { totalBookings: 'desc' },
      { name: 'asc' },
    ],
  });
};

export const getCustomersByTag = async (
  merchantId: string,
  tag: string,
  page: number = 1,
  limit: number = 20
) => {
  const skip = (page - 1) * limit;

  const [customers, total] = await Promise.all([
    prisma.customer.findMany({
      where: {
        merchantId,
        isDeleted: false,
        tags: {
          has: tag,
        },
      },
      skip,
      take: limit,
      include: {
        _count: {
          select: {
            Booking: { where: { isDeleted: false } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.customer.count({
      where: {
        merchantId,
        isDeleted: false,
        tags: {
          has: tag,
        },
      },
    }),
  ]);

  return { customers, total };
};

/**
 * Customer Import/Export helpers
 */
export const bulkCreateCustomers = async (
  merchantId: string,
  customersData: CreateCustomerData[]
) => {
  const results = {
    successful: [] as any[],
    failed: [] as { data: CreateCustomerData; error: string }[],
  };

  for (const customerData of customersData) {
    try {
      const customer = await createCustomer(merchantId, customerData);
      results.successful.push(customer);
    } catch (error: any) {
      results.failed.push({
        data: customerData,
        error: error.message,
      });
    }
  }

  return results;
};

export const getCustomersForExport = async (merchantId: string) => {
  return prisma.customer.findMany({
    where: {
      merchantId,
      isDeleted: false,
    },
    select: {
      name: true,
      email: true,
      phone: true,
      address: true,
      city: true,
      postcode: true,
      country: true,
      preferredLanguage: true,
      preferredTimezone: true,
      totalBookings: true,
      totalSpent: true,
      loyaltyPoints: true,
      tags: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });
};
