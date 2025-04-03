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


/** Disable a resource */
export const disable = async (req: Request, res: Response) => {
  // TODO: Implement disable
  res.json({ message: 'disable not implemented' });
};

/** Enable a resource */
export const enable = async (req: Request, res: Response) => {
  // TODO: Implement enable
  res.json({ message: 'enable not implemented' });
};

/** Clone a resource */
export const clone = async (req: Request, res: Response) => {
  // TODO: Implement clone
  res.json({ message: 'clone not implemented' });
};

/** Check availability of a resource */
export const checkAvailability = async (req: Request, res: Response) => {
  // TODO: Implement checkAvailability
  res.json({ message: 'checkAvailability not implemented' });
};

/** Get rate for a single resource */
export const getResourceRates = async (req: Request, res: Response) => {
  // TODO: Implement getResourceRates
  res.json({ message: 'getResourceRates not implemented' });
};