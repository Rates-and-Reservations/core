import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type ResourceCreateInput = Prisma.ResourceCreateInput;
type ResourceUpdateInput = Prisma.ResourceUpdateInput;

// Create Resource
export const createResource = async (data: ResourceCreateInput) => {
  return prisma.resource.create({
    data,
  });
};

// Get Resource by ID
export const getResourceById = async (id: string) => {
  return prisma.resource.findUnique({
    where: { id },
  });
};

// List Resources
export const listResources = async (filter: any = {}) => {
  return prisma.resource.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update Resource
export const updateResource = async (id: string, data: ResourceUpdateInput) => {
  return prisma.resource.update({
    where: { id },
    data,
  });
};

// Delete Resource
export const deleteResource = async (id: string) => {
  return prisma.resource.delete({
    where: { id },
  });
};
