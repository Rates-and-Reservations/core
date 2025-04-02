import * as WebhookEndpointService from './webhookEndpoint.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await WebhookEndpointService.createWebhookEndpoint(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await WebhookEndpointService.listWebhookEndpoints();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await WebhookEndpointService.getWebhookEndpointById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await WebhookEndpointService.updateWebhookEndpoint(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await WebhookEndpointService.deleteWebhookEndpoint(req.params.id);
  res.json(result);
};
