import * as WaitlistEntryService from './waitlistEntry.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await WaitlistEntryService.createWaitlistEntry(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await WaitlistEntryService.listWaitlistEntrys();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await WaitlistEntryService.getWaitlistEntryById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await WaitlistEntryService.updateWaitlistEntry(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await WaitlistEntryService.deleteWaitlistEntry(req.params.id);
  res.json(result);
};
