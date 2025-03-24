import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type NotificationCreateInput = Prisma.NotificationCreateInput;
type NotificationUpdateInput = Prisma.NotificationUpdateInput;

// Create Notification
export const createNotification = async (data: NotificationCreateInput) => {
  return prisma.notification.create({
    data,
  });
};

// Get Notification by ID
export const getNotificationById = async (id: string) => {
  return prisma.notification.findUnique({
    where: { id },
  });
};

// List Notifications
export const listNotifications = async (filter: any = {}) => {
  return prisma.notification.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update Notification
export const updateNotification = async (id: string, data: NotificationUpdateInput) => {
  return prisma.notification.update({
    where: { id },
    data,
  });
};

// Delete Notification
export const deleteNotification = async (id: string) => {
  return prisma.notification.delete({
    where: { id },
  });
};
