import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type WebhookEventCreateInput = Prisma.WebhookEventCreateInput;
type WebhookEventUpdateInput = Prisma.WebhookEventUpdateInput;

// Create WebhookEvent
export const createWebhookEvent = async (data: WebhookEventCreateInput) => {
  return prisma.webhookEvent.create({
    data,
  });
};

// Get WebhookEvent by ID
export const getWebhookEventById = async (id: string) => {
  return prisma.webhookEvent.findUnique({
    where: { id },
  });
};

// List WebhookEvents
export const listWebhookEvents = async (filter: any = {}) => {
  return prisma.webhookEvent.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update WebhookEvent
export const updateWebhookEvent = async (id: string, data: WebhookEventUpdateInput) => {
  return prisma.webhookEvent.update({
    where: { id },
    data,
  });
};

// Delete WebhookEvent
export const deleteWebhookEvent = async (id: string) => {
  return prisma.webhookEvent.delete({
    where: { id },
  });
};
