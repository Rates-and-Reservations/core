import * as MerchantContactService from './merchantContact.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the merchant contact already exists
   * - Check if the user is authorized to create a merchant contact
   * - Send verification email to the merchant contact
   */
  const result = await MerchantContactService.createMerchantContact(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list merchant contacts
   * - List only merchant contacts that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await MerchantContactService.listMerchantContacts();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the merchant contact
   * - Check if the merchant contact exists
   * - Add includes
   */
  const result = await MerchantContactService.getMerchantContactById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the merchant contact
   * - Check if the merchant contact exists
   */
  const result = await MerchantContactService.updateMerchantContact(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the merchant contact
   * - Check if the merchant contact exists
   */
  const result = await MerchantContactService.deleteMerchantContact(req.params.id);
  res.json(result);
};


/** Verify a merchant contact */
export const verify = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to verify the merchant contact
   * - Check if the merchant contact exists
   * - Verify the merchant contact
   */
  res.json({ message: 'verify not implemented' });
};