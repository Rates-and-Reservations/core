import * as ResourceService from './resource.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await ResourceService.createResource(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await ResourceService.listResources();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await ResourceService.getResourceById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await ResourceService.updateResource(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await ResourceService.deleteResource(req.params.id);
  res.json(result);
};
