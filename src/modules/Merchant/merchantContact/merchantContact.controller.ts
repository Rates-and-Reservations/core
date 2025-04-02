import * as MerchantContactService from './merchantContact.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await MerchantContactService.createMerchantContact(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await MerchantContactService.listMerchantContacts();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await MerchantContactService.getMerchantContactById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await MerchantContactService.updateMerchantContact(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await MerchantContactService.deleteMerchantContact(req.params.id);
  res.json(result);
};
