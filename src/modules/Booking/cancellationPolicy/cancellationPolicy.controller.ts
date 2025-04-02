import * as CancellationPolicyService from './cancellationPolicy.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await CancellationPolicyService.createCancellationPolicy(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await CancellationPolicyService.listCancellationPolicys();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await CancellationPolicyService.getCancellationPolicyById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await CancellationPolicyService.updateCancellationPolicy(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await CancellationPolicyService.deleteCancellationPolicy(req.params.id);
  res.json(result);
};
