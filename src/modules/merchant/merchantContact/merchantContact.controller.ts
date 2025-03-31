import { Request, Response } from "express";
import * as merchantContactService from "@/services/merchantcontact.service";
import * as merchantContactService_ from "@/modules/merchant/merchantContact/merchantContact.service";

export const listMerchantContacts = async (req: Request, res: Response) => {
  const merchantId = req.headers['x-merchant-id'] as string;
  const merchantContacts = await merchantContactService.listMerchantContacts({ merchantId });
  res.json(merchantContacts);
}

export const getMerchantContactById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const merchantContact = await merchantContactService.getMerchantContactById(id);
  res.json(merchantContact);
}

export const createMerchantContact = async (req: Request, res: Response) => {
  const { body } = req;
  const merchantContact = await merchantContactService.createMerchantContact(body);
  res.status(201).json(merchantContact);
}

export const updateMerchantContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const merchantContact = await merchantContactService.updateMerchantContact(id, body);
  res.json(merchantContact);
}

export const deleteMerchantContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  await merchantContactService.deleteMerchantContact(id);
  res.status(204).end();
}

export const markAsDefault = async (req: Request, res: Response) => {
  const { id } = req.params;
  const merchantContact = await merchantContactService_.markAsDefaultContact(id);
  res.json(merchantContact);
}