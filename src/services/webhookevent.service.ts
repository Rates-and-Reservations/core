import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type WebhookEventCreateInput = Prisma.WebhookEventCreateInput;
type WebhookEventUpdateInput = Prisma.WebhookEventUpdateInput;

export const createWebhookEvent = async (data: WebhookEventCreateInput) => {
  return prisma.webhookEvent.create({ data });
};

export const getWebhookEventById = async (id: string) => {
  return prisma.webhookEvent.findUnique({ where: { id } });
};

export const listWebhookEvents = async (filter: any = {}) => {
  return prisma.webhookEvent.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateWebhookEvent = async (id: string, data: WebhookEventUpdateInput) => {
  return prisma.webhookEvent.update({ where: { id }, data });
};

export const deleteWebhookEvent = async (id: string) => {
  return prisma.webhookEvent.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

// export const deleteWebhookEvent = async (id: string) => {
//   return prisma.webhookEvent.delete({ where: { id } });
// };
