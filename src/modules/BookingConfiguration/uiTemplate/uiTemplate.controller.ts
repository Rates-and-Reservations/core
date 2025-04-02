import * as UiTemplateService from './uiTemplate.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await UiTemplateService.createUiTemplate(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await UiTemplateService.listUiTemplates();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await UiTemplateService.getUiTemplateById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await UiTemplateService.updateUiTemplate(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await UiTemplateService.deleteUiTemplate(req.params.id);
  res.json(result);
};
