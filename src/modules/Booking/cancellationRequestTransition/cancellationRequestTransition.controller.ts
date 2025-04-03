import * as CancellationRequestTransitionService from './cancellationRequestTransition.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await CancellationRequestTransitionService.createCancellationRequestTransition(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await CancellationRequestTransitionService.listCancellationRequestTransitions();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await CancellationRequestTransitionService.getCancellationRequestTransitionById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await CancellationRequestTransitionService.updateCancellationRequestTransition(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await CancellationRequestTransitionService.deleteCancellationRequestTransition(req.params.id);
  res.json(result);
};
