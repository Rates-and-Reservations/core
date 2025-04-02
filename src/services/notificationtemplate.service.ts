import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type NotificationTemplateCreateInput = Prisma.NotificationTemplateCreateInput;
type NotificationTemplateUpdateInput = Prisma.NotificationTemplateUpdateInput;

export const createNotificationTemplate = async (data: NotificationTemplateCreateInput) => {
  return prisma.notificationTemplate.create({ data });
};

export const getNotificationTemplateById = async (id: string) => {
  return prisma.notificationTemplate.findUnique({ where: { id } });
};

export const listNotificationTemplates = async (filter: any = {}) => {
  return prisma.notificationTemplate.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateNotificationTemplate = async (id: string, data: NotificationTemplateUpdateInput) => {
  return prisma.notificationTemplate.update({ where: { id }, data });
};

export const deleteNotificationTemplate = async (id: string) => {
  return prisma.notificationTemplate.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteNotificationTemplate = async (id: string) => {
//   return prisma.notificationTemplate.delete({ where: { id } });
// };
