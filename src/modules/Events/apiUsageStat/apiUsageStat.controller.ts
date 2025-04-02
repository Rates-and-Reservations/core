import * as ApiUsageStatService from './apiUsageStat.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await ApiUsageStatService.createApiUsageStat(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await ApiUsageStatService.listApiUsageStats();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await ApiUsageStatService.getApiUsageStatById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await ApiUsageStatService.updateApiUsageStat(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await ApiUsageStatService.deleteApiUsageStat(req.params.id);
  res.json(result);
};
