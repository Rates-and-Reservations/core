import * as WebhookEventLogService from './webhookEventLog.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await WebhookEventLogService.createWebhookEventLog(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await WebhookEventLogService.listWebhookEventLogs();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await WebhookEventLogService.getWebhookEventLogById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await WebhookEventLogService.updateWebhookEventLog(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await WebhookEventLogService.deleteWebhookEventLog(req.params.id);
  res.json(result);
};
