import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type AuditLogCreateInput = Prisma.AuditLogCreateInput;
type AuditLogUpdateInput = Prisma.AuditLogUpdateInput;

// Create AuditLog
export const createAuditLog = async (data: AuditLogCreateInput) => {
  return prisma.auditLog.create({
    data,
  });
};

// Get AuditLog by ID
export const getAuditLogById = async (id: string) => {
  return prisma.auditLog.findUnique({
    where: { id },
  });
};

// List AuditLogs
export const listAuditLogs = async (filter: any = {}) => {
  return prisma.auditLog.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update AuditLog
export const updateAuditLog = async (id: string, data: AuditLogUpdateInput) => {
  return prisma.auditLog.update({
    where: { id },
    data,
  });
};

// Delete AuditLog
export const deleteAuditLog = async (id: string) => {
  return prisma.auditLog.delete({
    where: { id },
  });
};
