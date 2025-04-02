import * as RefundLogService from './refundLog.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await RefundLogService.createRefundLog(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await RefundLogService.listRefundLogs();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await RefundLogService.getRefundLogById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await RefundLogService.updateRefundLog(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await RefundLogService.deleteRefundLog(req.params.id);
  res.json(result);
};
