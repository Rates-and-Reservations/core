import * as RateService from './rate.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await RateService.createRate(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await RateService.listRates();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await RateService.getRateById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await RateService.updateRate(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await RateService.deleteRate(req.params.id);
  res.json(result);
};


/** Disable a rate */
export const disable = async (req: Request, res: Response) => {
  // TODO: Implement disable
  res.json({ message: 'disable not implemented' });
};

/** Enable a rate */
export const enable = async (req: Request, res: Response) => {
  // TODO: Implement enable
  res.json({ message: 'enable not implemented' });
};

/** Clone a rate */
export const clone = async (req: Request, res: Response) => {
  // TODO: Implement clone
  res.json({ message: 'clone not implemented' });
};

/** Make a rate available to the public */
export const publish = async (req: Request, res: Response) => {
  // TODO: Implement publish
  res.json({ message: 'publish not implemented' });
};

/** Make a rate unavailable to the public */
export const unpublish = async (req: Request, res: Response) => {
  // TODO: Implement unpublish
  res.json({ message: 'unpublish not implemented' });
};

/** Priority order of rates */
export const order = async (req: Request, res: Response) => {
  // TODO: Implement order
  res.json({ message: 'order not implemented' });
};