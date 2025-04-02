import * as RefundRequestService from './refundRequest.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await RefundRequestService.createRefundRequest(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await RefundRequestService.listRefundRequests();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await RefundRequestService.getRefundRequestById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await RefundRequestService.updateRefundRequest(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await RefundRequestService.deleteRefundRequest(req.params.id);
  res.json(result);
};
