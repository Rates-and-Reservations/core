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


/** Disable a webhook endpoint */
export const disable = async (req: Request, res: Response) => {
  // TODO: Implement disable
  res.json({ message: 'disable not implemented' });
};

/** Enable a webhook endpoint */
export const enable = async (req: Request, res: Response) => {
  // TODO: Implement enable
  res.json({ message: 'enable not implemented' });
};

/** Test a webhook endpoint */
export const test = async (req: Request, res: Response) => {
  // TODO: Implement test
  res.json({ message: 'test not implemented' });
};