import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type NotificationCreateInput = Prisma.NotificationCreateInput;
type NotificationUpdateInput = Prisma.NotificationUpdateInput;

export const createNotification = async (data: NotificationCreateInput) => {
  return prisma.notification.create({ data });
};

export const getNotificationById = async (id: string) => {
  return prisma.notification.findUnique({ where: { id } });
};

export const listNotifications = async (filter: any = {}) => {
  return prisma.notification.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateNotification = async (id: string, data: NotificationUpdateInput) => {
  return prisma.notification.update({ where: { id }, data });
};

export const deleteNotification = async (id: string) => {
  return prisma.notification.update({ where: { id }, data: { deletedAt: new Date() } });
};
