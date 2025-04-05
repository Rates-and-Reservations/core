import * as MerchantUserService from './merchantUser.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the merchant user already exists
   * - Check if the user is authorized to create a merchant user
   * - Send invitation email to the merchant user
   */
  const result = await MerchantUserService.createMerchantUser(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list merchant users
   * - List only merchant users that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await MerchantUserService.listMerchantUsers();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the merchant user
   * - Check if the merchant user exists
   * - Add includes
   */
  const result = await MerchantUserService.getMerchantUserById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the merchant user
   * - Check if the merchant user exists
   */
  const result = await MerchantUserService.updateMerchantUser(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the merchant user
   * - Check if the merchant user exists
   * - Check if the merchant user is not the last admin / user
   * - Check if the merchant user is not the owner
   * - Remove the merchant user from the merchant
   * - Notify the merchant user
   */
  const result = await MerchantUserService.deleteMerchantUser(req.params.id);
  res.json(result);
};
