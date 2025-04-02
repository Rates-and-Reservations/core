import * as MerchantService from './merchant.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await MerchantService.createMerchant(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await MerchantService.listMerchants();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await MerchantService.getMerchantById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await MerchantService.updateMerchant(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await MerchantService.deleteMerchant(req.params.id);
  res.json(result);
};
