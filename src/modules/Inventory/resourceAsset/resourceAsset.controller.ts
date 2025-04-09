import * as ResourceAssetService from './resourceAsset.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to create a merchant asset
   * - Check if the merchant asset exists
   * - Upload the asset to the cloud storage
   * - Assign the asset to the resource
   * - User can also select existing assets - in this case we should not upload the asset to the cloud storage
   */
  const result = await ResourceAssetService.createResourceAsset(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list assets for a resource
   * - List only resource assets that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await ResourceAssetService.listResourceAssets();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the resource asset
   * - Check if the resource asset exists
   * - Add includes
   */
  const result = await ResourceAssetService.getResourceAssetById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - We can set primary and sort order
   * - Check if the user is authorized to update the resource asset
   */
  const result = await ResourceAssetService.updateResourceAsset(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the resource asset
   * - Check if the resource asset exists
   * - Unassign the asset from the resource by deleting the resource asset
   */
  const result = await ResourceAssetService.deleteResourceAsset(req.params.id);
  res.json(result);
};
