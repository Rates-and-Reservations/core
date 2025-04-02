import * as MerchantAssetService from './merchantAsset.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await MerchantAssetService.createMerchantAsset(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await MerchantAssetService.listMerchantAssets();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await MerchantAssetService.getMerchantAssetById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await MerchantAssetService.updateMerchantAsset(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await MerchantAssetService.deleteMerchantAsset(req.params.id);
  res.json(result);
};
