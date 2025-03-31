import { Request, Response } from "express";
import * as resourcebookingconfigService from "@/services/resourcebookingconfig.service";


export const listResourcesConfig = async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const resourceConfgs = await resourcebookingconfigService.listResourceBookingConfigs({ merchantId });
  res.json(resourceConfgs);
}

export const createResourceConfig = async (req: Request, res: Response) => {
  const { body } = req;
  const resourceConfig = await resourcebookingconfigService.createResourceBookingConfig(body);
  res.status(201).json(resourceConfig);
}

export const updateResourceConfig = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const resourceConfig = await resourcebookingconfigService.updateResourceBookingConfig(id, body);
  res.json(resourceConfig);
}

export const deleteResourceConfig = async (req: Request, res: Response) => {
  const { id } = req.params;
  await resourcebookingconfigService.updateResourceBookingConfig(id, { isActive: true });
  res.status(204).send();
}

export const getResourceConfig = async (req: Request, res: Response) => {
  const { id } = req.params;
  const resourceConfig = await resourcebookingconfigService.getResourceBookingConfigById(id);
  res.json(resourceConfig);
}
