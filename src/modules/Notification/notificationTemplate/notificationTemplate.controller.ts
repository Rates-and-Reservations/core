import * as NotificationTemplateService from './notificationTemplate.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await NotificationTemplateService.createNotificationTemplate(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await NotificationTemplateService.listNotificationTemplates();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await NotificationTemplateService.getNotificationTemplateById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await NotificationTemplateService.updateNotificationTemplate(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await NotificationTemplateService.deleteNotificationTemplate(req.params.id);
  res.json(result);
};
