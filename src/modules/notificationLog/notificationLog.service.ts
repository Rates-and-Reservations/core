import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type NotificationLogCreateInput = Prisma.NotificationLogCreateInput;
type NotificationLogUpdateInput = Prisma.NotificationLogUpdateInput;

export const createNotificationLog = async (data: NotificationLogCreateInput) => {
  return prisma.notificationLog.create({ data });
};

export const getNotificationLogById = async (id: string) => {
  return prisma.notificationLog.findUnique({ where: { id } });
};

export const listNotificationLogs = async (filter: any = {}) => {
  return prisma.notificationLog.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateNotificationLog = async (id: string, data: NotificationLogUpdateInput) => {
  return prisma.notificationLog.update({ where: { id }, data });
};

export const deleteNotificationLog = async (id: string) => {
  return prisma.notificationLog.update({ where: { id }, data: { deletedAt: new Date() } });
};
