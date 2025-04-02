import * as AppService from './app.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await AppService.createApp(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await AppService.listApps();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await AppService.getAppById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await AppService.updateApp(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await AppService.deleteApp(req.params.id);
  res.json(result);
};
