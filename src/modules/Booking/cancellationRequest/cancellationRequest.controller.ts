import * as CancellationRequestService from './cancellationRequest.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await CancellationRequestService.createCancellationRequest(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await CancellationRequestService.listCancellationRequests();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await CancellationRequestService.getCancellationRequestById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await CancellationRequestService.updateCancellationRequest(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await CancellationRequestService.deleteCancellationRequest(req.params.id);
  res.json(result);
};
