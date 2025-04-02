import * as AppInstallService from './appInstall.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await AppInstallService.createAppInstall(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await AppInstallService.listAppInstalls();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await AppInstallService.getAppInstallById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await AppInstallService.updateAppInstall(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await AppInstallService.deleteAppInstall(req.params.id);
  res.json(result);
};
