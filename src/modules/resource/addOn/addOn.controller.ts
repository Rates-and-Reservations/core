import { Request, Response } from "express";
import * as addOnService from "@/services/addon.service";


export const listAddOns = async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const addOn = await addOnService.listAddOns({ merchantId });
  res.json(addOn);
}

export const createAddOn = async (req: Request, res: Response) => {
  const { body } = req;
  const addOn = await addOnService.createAddOn(body);
  res.status(201).json(addOn);
}

export const updateAddOn = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const addOn = await addOnService.updateAddOn(id, body);
  res.json(addOn);
}

export const deleteAddOn = async (req: Request, res: Response) => {
  const { id } = req.params;
  await addOnService.deleteAddOn(id);
  res.status(204).send();
}

export const getAddOn = async (req: Request, res: Response) => {
  const { id } = req.params;
  const addOn = await addOnService.getAddOnById(id);
  res.json(addOn);
}
