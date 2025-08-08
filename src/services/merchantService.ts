import { BusinessType, OrganisationRoles } from '@prisma/client';
import prisma from '@/config/database';
import { CreateMerchantData, UpdateMerchantData } from '@/types/merchant';

export const createMerchant = async (data: CreateMerchantData, ownerId: string) => {
  // Check if user already has a merchant
  const existingMerchantUser = await prisma.merchantUser.findFirst({
    where: {
      userId: ownerId,
      isActive: true,
      isDeleted: false,
    },
  });

  if (existingMerchantUser) {
    throw new Error('User already has a merchant');
  }

  // Create merchant and merchant user in a transaction
  const result = await prisma.$transaction(async (tx) => {
    // Create the merchant
    const merchant = await tx.merchant.create({
      data: {
        ...data,
        ownerId,
      },
    });

    // Create merchant user relationship
    await tx.merchantUser.create({
      data: {
        merchantId: merchant.id,
        userId: ownerId,
        role: OrganisationRoles.OWNER,
        isActive: true,
        isVerified: true,
      },
    });

    return merchant;
  });

  return result;
};

export const getMerchantById = async (merchantId: string) => {
  return prisma.merchant.findUnique({
    where: {
      id: merchantId,
      isDeleted: false,
    },
    include: {
      MerchantContact: {
        where: { isDeleted: false },
        orderBy: { isDefault: 'desc' },
      },
      _count: {
        select: {
          Resource: { where: { isDeleted: false } },
          Customer: { where: { isDeleted: false } },
          Booking: { where: { isDeleted: false } },
        },
      },
    },
  });
};

export const updateMerchant = async (merchantId: string, data: UpdateMerchantData) => {
  return prisma.merchant.update({
    where: {
      id: merchantId,
      isDeleted: false,
    },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });
};

export const deleteMerchant = async (merchantId: string) => {
  return prisma.merchant.update({
    where: {
      id: merchantId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

export const createMerchantContact = async (merchantId: string, data: any) => {
  // If this is set as default, unset other defaults
  if (data.isDefault) {
    await prisma.merchantContact.updateMany({
      where: {
        merchantId,
        isDeleted: false,
      },
      data: {
        isDefault: false,
      },
    });
  }

  return prisma.merchantContact.create({
    data: {
      ...data,
      merchantId,
    },
  });
};

export const getMerchantContacts = async (merchantId: string) => {
  return prisma.merchantContact.findMany({
    where: {
      merchantId,
      isDeleted: false,
    },
    orderBy: [
      { isDefault: 'desc' },
      { createdAt: 'asc' },
    ],
  });
};

export const updateMerchantContact = async (
  contactId: string,
  merchantId: string,
  data: any
) => {
  // If this is set as default, unset other defaults
  if (data.isDefault) {
    await prisma.merchantContact.updateMany({
      where: {
        merchantId,
        isDeleted: false,
        NOT: { id: contactId },
      },
      data: {
        isDefault: false,
      },
    });
  }

  return prisma.merchantContact.update({
    where: {
      id: contactId,
      merchantId,
    },
    data,
  });
};

export const deleteMerchantContact = async (contactId: string, merchantId: string) => {
  return prisma.merchantContact.update({
    where: {
      id: contactId,
      merchantId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

export const inviteMerchantUser = async (merchantId: string, data: any) => {
  // Check if user already exists in this merchant
  const existingUser = await prisma.merchantUser.findFirst({
    where: {
      merchantId,
      userId: data.userId,
      isDeleted: false,
    },
  });

  if (existingUser) {
    throw new Error('User already exists in merchant');
  }

  return prisma.merchantUser.create({
    data: {
      merchantId,
      userId: data.userId,
      role: data.role,
      isActive: true,
      isVerified: false, // They need to accept the invitation
    },
  });
};

export const getMerchantUsers = async (merchantId: string) => {
  return prisma.merchantUser.findMany({
    where: {
      merchantId,
      isDeleted: false,
    },
    select: {
      id: true,
      userId: true,
      role: true,
      isActive: true,
      isVerified: true,
      createdAt: true,
    },
    orderBy: [
      { role: 'asc' },
      { createdAt: 'asc' },
    ],
  });
};

export const updateMerchantUser = async (
  userId: string,
  merchantId: string,
  data: any
) => {
  return prisma.merchantUser.update({
    where: {
      id: userId,
      merchantId,
    },
    data: {
      role: data.role,
      isActive: data.isActive,
    },
  });
};

export const removeMerchantUser = async (userId: string, merchantId: string) => {
  return prisma.merchantUser.update({
    where: {
      id: userId,
      merchantId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};

export const uploadMerchantAsset = async (merchantId: string, data: any) => {
  // In a real implementation, this would handle file upload to cloud storage
  return prisma.merchantAsset.create({
    data: {
      merchantId,
      name: data.name,
      type: data.type,
      url: data.url,
      publicId: data.publicId,
    },
  });
};

export const getMerchantAssets = async (merchantId: string) => {
  return prisma.merchantAsset.findMany({
    where: {
      merchantId,
      isDeleted: false,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const deleteMerchantAsset = async (assetId: string, merchantId: string) => {
  return prisma.merchantAsset.update({
    where: {
      id: assetId,
      merchantId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
    },
  });
};