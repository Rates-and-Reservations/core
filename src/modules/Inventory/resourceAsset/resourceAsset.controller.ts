import * as ResourceAssetService from './resourceAsset.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await ResourceAssetService.createResourceAsset(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await ResourceAssetService.listResourceAssets();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await ResourceAssetService.getResourceAssetById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await ResourceAssetService.updateResourceAsset(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await ResourceAssetService.deleteResourceAsset(req.params.id);
  res.json(result);
};
