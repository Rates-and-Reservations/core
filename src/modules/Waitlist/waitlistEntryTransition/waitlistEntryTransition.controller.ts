import * as WaitlistEntryTransitionService from './waitlistEntryTransition.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await WaitlistEntryTransitionService.createWaitlistEntryTransition(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await WaitlistEntryTransitionService.listWaitlistEntryTransitions();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await WaitlistEntryTransitionService.getWaitlistEntryTransitionById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await WaitlistEntryTransitionService.updateWaitlistEntryTransition(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await WaitlistEntryTransitionService.deleteWaitlistEntryTransition(req.params.id);
  res.json(result);
};
