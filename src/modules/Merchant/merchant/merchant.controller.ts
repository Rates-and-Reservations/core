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


/** Disable a merchant */
export const disable = async (req: Request, res: Response) => {
  // TODO: Implement disable
  res.json({ message: 'disable not implemented' });
};

/** Enable a merchant */
export const enable = async (req: Request, res: Response) => {
  // TODO: Implement enable
  res.json({ message: 'enable not implemented' });
};

/** Verify a merchant */
export const verify = async (req: Request, res: Response) => {
  // TODO: Implement verify
  res.json({ message: 'verify not implemented' });
};

/** Unverify a merchant */
export const unverify = async (req: Request, res: Response) => {
  // TODO: Implement unverify
  res.json({ message: 'unverify not implemented' });
};