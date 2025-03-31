import { Request, Response } from "express";
import * as resourceService from "@/services/resource.service";
import * as resourceService_ from "./resource.service";

import * as ratesService from "@/services/rate.service";

export const listResources = async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const resources = await resourceService.listResources({ merchantId });
  res.json(resources);
}

export const createResource = async (req: Request, res: Response) => {
  const { body } = req;
  const resource = await resourceService.createResource(body);
  res.status(201).json(resource);
}

export const updateResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const resource = await resourceService.updateResource(id, body);
  res.json(resource);
}

export const deleteResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  await resourceService.updateResource(id, { isActive: true });
  res.status(204).send();
}

export const getResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const resource = await resourceService.getResourceById(id);
  res.json(resource);
}

export const getResourceRates = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rates = await ratesService.listRates({ resourceId: id });
  res.json(rates);
}

export const checkAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { startDate, endDate } = req.body;

  const isResourceAvailable = await resourceService_.isResourceAvailable(id, new Date(startDate), new Date(endDate));
  res.json({ isResourceAvailable });
}