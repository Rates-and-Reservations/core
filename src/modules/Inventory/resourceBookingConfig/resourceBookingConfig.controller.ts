import * as ResourceBookingConfigService from './resourceBookingConfig.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the resource booking config already exists
   * - Check if the user is authorized to create a resource booking config
   */
  const result = await ResourceBookingConfigService.createResourceBookingConfig(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list resource booking configs
   * - List only resource booking configs that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await ResourceBookingConfigService.listResourceBookingConfigs();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the resource booking config
   * - Check if the resource booking config exists
   * - Add includes
   */
  const result = await ResourceBookingConfigService.getResourceBookingConfigById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the resource booking config
   * - Check if the resource booking config exists
   */
  const result = await ResourceBookingConfigService.updateResourceBookingConfig(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the resource booking config
   * - Check if the resource booking config exists
   */
  const result = await ResourceBookingConfigService.deleteResourceBookingConfig(req.params.id);
  res.json(result);
};
