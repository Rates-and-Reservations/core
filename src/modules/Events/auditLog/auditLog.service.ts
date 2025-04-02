import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type AuditLogCreateInput = Prisma.AuditLogCreateInput;
type AuditLogUpdateInput = Prisma.AuditLogUpdateInput;

export const createAuditLog = async (data: AuditLogCreateInput) => {
  return prisma.auditLog.create({ data });
};

export const getAuditLogById = async (id: string) => {
  return prisma.auditLog.findUnique({ where: { id } });
};

export const listAuditLogs = async (filter: any = {}) => {
  return prisma.auditLog.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateAuditLog = async (id: string, data: AuditLogUpdateInput) => {
  return prisma.auditLog.update({ where: { id }, data });
};

export const deleteAuditLog = async (id: string) => {
  return prisma.auditLog.update({ where: { id }, data: { deletedAt: new Date() } });
};
