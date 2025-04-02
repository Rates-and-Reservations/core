import * as ResourceTemplateService from './resourceTemplate.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await ResourceTemplateService.createResourceTemplate(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await ResourceTemplateService.listResourceTemplates();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await ResourceTemplateService.getResourceTemplateById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await ResourceTemplateService.updateResourceTemplate(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await ResourceTemplateService.deleteResourceTemplate(req.params.id);
  res.json(result);
};
