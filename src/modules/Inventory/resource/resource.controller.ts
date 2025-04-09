import * as ResourceService from './resource.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the resource already exists
   * - Check if the user is authorized to create a resource
   */
  const result = await ResourceService.createResource(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list resources
   * - List only resources that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await ResourceService.listResources();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the resource
   * - Check if the resource exists
   * - Add includes
   */
  const result = await ResourceService.getResourceById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the resource
   * - Check if the resource exists
   */
  const result = await ResourceService.updateResource(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the resource
   * - Check if the resource exists
   */
  const result = await ResourceService.deleteResource(req.params.id);
  res.json(result);
};


/** Disable a resource */
export const disable = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to disable the resource
   * - Check if the resource exists
   * - Check if the resource is disabled
   * - Disable the resource
   */
  res.json({ message: 'disable not implemented' });
};

/** Enable a resource */
export const enable = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to enable the resource
   * - Check if the resource exists
   * - Check if the resource is enabled
   * - Enable the resource
   */
  res.json({ message: 'enable not implemented' });
};

/** Clone a resource */
export const clone = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to clone the resource
   * - Check if the resource exists
   * - Clone the resource
   */
  res.json({ message: 'clone not implemented' });
};

/** Check availability of a resource */
export const checkAvailability = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to check availability of the resource
   * - Check if the resource exists
   * - Check if the resource is available for the given date range
   */
  res.json({ message: 'checkAvailability not implemented' });
};

/** Get rate for a single resource */
export const getResourceRates = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the resource rates
   * - Check if the resource exists
   * - Get the rates for the resource
   */
  res.json({ message: 'getResourceRates not implemented' });
};