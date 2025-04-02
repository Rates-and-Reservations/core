import prisma from '@/clients/prisma';
import { Prisma } from '@prisma/client';

type WebhookEndpointCreateInput = Prisma.WebhookEndpointCreateInput;
type WebhookEndpointUpdateInput = Prisma.WebhookEndpointUpdateInput;

export const createWebhookEndpoint = async (data: WebhookEndpointCreateInput) => {
  return prisma.webhookEndpoint.create({ data });
};

export const getWebhookEndpointById = async (id: string) => {
  return prisma.webhookEndpoint.findUnique({ where: { id } });
};

export const listWebhookEndpoints = async (filter: any = {}) => {
  return prisma.webhookEndpoint.findMany({ where: filter, orderBy: { createdAt: 'desc' } });
};

export const updateWebhookEndpoint = async (id: string, data: WebhookEndpointUpdateInput) => {
  return prisma.webhookEndpoint.update({ where: { id }, data });
};

export const deleteWebhookEndpoint = async (id: string) => {
  return prisma.webhookEndpoint.update({ where: { id }, data: { deletedAt: new Date() } });
};
