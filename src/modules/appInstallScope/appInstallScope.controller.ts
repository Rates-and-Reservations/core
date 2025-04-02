import * as AppInstallScopeService from './appInstallScope.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await AppInstallScopeService.createAppInstallScope(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await AppInstallScopeService.listAppInstallScopes();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await AppInstallScopeService.getAppInstallScopeById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await AppInstallScopeService.updateAppInstallScope(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await AppInstallScopeService.deleteAppInstallScope(req.params.id);
  res.json(result);
};
