import * as RateAddOnService from './rateAddOn.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await RateAddOnService.createRateAddOn(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await RateAddOnService.listRateAddOns();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await RateAddOnService.getRateAddOnById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await RateAddOnService.updateRateAddOn(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await RateAddOnService.deleteRateAddOn(req.params.id);
  res.json(result);
};
