import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type WebhookEventLogCreateInput = Prisma.WebhookEventLogCreateInput;
type WebhookEventLogUpdateInput = Prisma.WebhookEventLogUpdateInput;

export const createWebhookEventLog = async (data: WebhookEventLogCreateInput) => {
  return prisma.webhookEventLog.create({ data });
};

export const getWebhookEventLogById = async (id: string) => {
  return prisma.webhookEventLog.findUnique({ where: { id } });
};

export const listWebhookEventLogs = async (filter: any = {}) => {
  return prisma.webhookEventLog.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateWebhookEventLog = async (id: string, data: WebhookEventLogUpdateInput) => {
  return prisma.webhookEventLog.update({ where: { id }, data });
};

export const deleteWebhookEventLog = async (id: string) => {
  return prisma.webhookEventLog.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteWebhookEventLog = async (id: string) => {
//   return prisma.webhookEventLog.delete({ where: { id } });
// };
