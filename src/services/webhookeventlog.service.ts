import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

// Type Aliases
type WebhookEventLogCreateInput = Prisma.WebhookEventLogCreateInput;
type WebhookEventLogUpdateInput = Prisma.WebhookEventLogUpdateInput;

// Create WebhookEventLog
export const createWebhookEventLog = async (data: WebhookEventLogCreateInput) => {
  return prisma.webhookEventLog.create({
    data,
  });
};

// Get WebhookEventLog by ID
export const getWebhookEventLogById = async (id: string) => {
  return prisma.webhookEventLog.findUnique({
    where: { id },
  });
};

// List WebhookEventLogs
export const listWebhookEventLogs = async (filter: any = {}) => {
  return prisma.webhookEventLog.findMany({
    where: filter,
    orderBy: { createdAt: 'desc' },
  });
};

// Update WebhookEventLog
export const updateWebhookEventLog = async (id: string, data: WebhookEventLogUpdateInput) => {
  return prisma.webhookEventLog.update({
    where: { id },
    data,
  });
};

// Delete WebhookEventLog
export const deleteWebhookEventLog = async (id: string) => {
  return prisma.webhookEventLog.delete({
    where: { id },
  });
};
