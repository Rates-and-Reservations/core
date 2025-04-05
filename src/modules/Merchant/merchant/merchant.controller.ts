import * as MerchantService from './merchant.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the merchant already exists
   * - Check if the user is authorized to create a merchant
   * - Send onboariding email to the merchant
   */
  const result = await MerchantService.createMerchant(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list merchants
   * - List only merchants that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await MerchantService.listMerchants();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the merchant
   * - Check if the merchant exists
   * - Add includes
   */
  const result = await MerchantService.getMerchantById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the merchant
   * - Check if the merchant exists
   */
  const result = await MerchantService.updateMerchant(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the merchant
   * - Check if the merchant exists
   */
  const result = await MerchantService.deleteMerchant(req.params.id);
  res.json(result);
};


/** Disable a merchant */
export const disable = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to disable the merchant
   * - Check if the merchant exists
   * - Check if the merchant is already disabled
   * - Disable the merchant
   * - Send email to the merchant
   */
  res.json({ message: 'disable not implemented' });
};

/** Enable a merchant */
export const enable = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to enable the merchant
   * - Check if the merchant exists
   * - Check if the merchant is already enabled
   * - Enable the merchant
   * - Send email to the merchant
   */
  res.json({ message: 'enable not implemented' });
};

/** Verify a merchant */
export const verify = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to verify the merchant
   * - Check if the merchant exists
   * - Check if the merchant is already verified
   * - Verify the merchant
   * - Send email to the merchant
   */
  res.json({ message: 'verify not implemented' });
};

/** Unverify a merchant */
export const unverify = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to unverify the merchant
   * - Check if the merchant exists
   * - Check if the merchant is already unverified
   * - Unverify the merchant
   * - Send email to the merchant
   */
  res.json({ message: 'unverify not implemented' });
};