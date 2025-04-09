import * as ResourceTemplateService from './resourceTemplate.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the resource template already exists
   * - Check if the user is authorized to create a resource template
   */
  const result = await ResourceTemplateService.createResourceTemplate(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to list resource templates
   * - List only resource templates that the user is authorized to see
   * - Add pagination, includes and filtering
   */
  const results = await ResourceTemplateService.listResourceTemplates();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to get the resource template
   * - Check if the resource template exists
   * - Add includes
   */
  const result = await ResourceTemplateService.getResourceTemplateById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Validate the request body
   * - Check if the user is authorized to update the resource template
   * - Check if the resource template exists
   */
  const result = await ResourceTemplateService.updateResourceTemplate(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to delete the resource template
   * - Check if the resource template exists
   */
  const result = await ResourceTemplateService.deleteResourceTemplate(req.params.id);
  res.json(result);
};


/** Clone a resource template */
export const clone = async (req: Request, res: Response) => {
  /**
   * To Do:
   * - Check if the user is authorized to clone the resource template
   * - Check if the resource template exists
   * - Clone the resource template
   */
  res.json({ message: 'clone not implemented' });
};