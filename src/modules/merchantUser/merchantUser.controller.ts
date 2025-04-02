import * as MerchantUserService from './merchantUser.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await MerchantUserService.createMerchantUser(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await MerchantUserService.listMerchantUsers();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await MerchantUserService.getMerchantUserById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await MerchantUserService.updateMerchantUser(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await MerchantUserService.deleteMerchantUser(req.params.id);
  res.json(result);
};
