import * as AddOnService from './addOn.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await AddOnService.createAddOn(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await AddOnService.listAddOns();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await AddOnService.getAddOnById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await AddOnService.updateAddOn(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await AddOnService.deleteAddOn(req.params.id);
  res.json(result);
};
