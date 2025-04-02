import * as NotificationService from './notification.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await NotificationService.createNotification(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await NotificationService.listNotifications();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await NotificationService.getNotificationById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await NotificationService.updateNotification(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await NotificationService.deleteNotification(req.params.id);
  res.json(result);
};
