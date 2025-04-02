import * as ApiUsageLogService from './apiUsageLog.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await ApiUsageLogService.createApiUsageLog(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await ApiUsageLogService.listApiUsageLogs();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await ApiUsageLogService.getApiUsageLogById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await ApiUsageLogService.updateApiUsageLog(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await ApiUsageLogService.deleteApiUsageLog(req.params.id);
  res.json(result);
};
