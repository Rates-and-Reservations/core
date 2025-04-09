import * as AddOnService from './addOn.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
 * To Do:
 * - Validate the request body
 * - Check if the addon already exists
 * - Check if the user is authorized to create an addon
 */
  const result = await AddOnService.createAddOn(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list addons
   * - List only addons that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await AddOnService.listAddOns();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the addon
   * - Check if the addon exists
   * - Add includes
   */
  const result = await AddOnService.getAddOnById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the addon
   * - Check if the addon exists
   */
  const result = await AddOnService.updateAddOn(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the addon
   * - Check if the addon exists
   */
  const result = await AddOnService.deleteAddOn(req.params.id);
  res.json(result);
};
