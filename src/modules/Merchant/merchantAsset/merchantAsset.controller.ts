import * as MerchantAssetService from './merchantAsset.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the merchant asset already exists
   * - Check if the user is authorized to create a merchant asset
   * - Upload the asset to the cloud storage
   */
  const result = await MerchantAssetService.createMerchantAsset(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list merchant assets
   * - List only merchant assets that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await MerchantAssetService.listMerchantAssets();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the merchant asset
   * - Check if the merchant asset exists
   * - Add includes
   */
  const result = await MerchantAssetService.getMerchantAssetById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the merchant asset
   * - Check if the merchant asset exists
   * - Upload the asset to the cloud storage
   */
  const result = await MerchantAssetService.updateMerchantAsset(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the merchant asset
   * - Check if the merchant asset exists
   * - Remove the asset from the cloud storage
   */
  const result = await MerchantAssetService.deleteMerchantAsset(req.params.id);
  res.json(result);
};


/** Download an asset */
export const download = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to download the asset
   * - Check if the asset exists
   * - Download the asset from the cloud storage
   */
  res.json({ message: 'download not implemented' });
};