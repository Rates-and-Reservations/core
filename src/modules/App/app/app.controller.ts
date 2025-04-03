import * as AppService from './app.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await AppService.createApp(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await AppService.listApps();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await AppService.getAppById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await AppService.updateApp(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await AppService.deleteApp(req.params.id);
  res.json(result);
};


/** Disable an app */
export const disable = async (req: Request, res: Response) => {
  // TODO: Implement disable
  res.json({ message: 'disable not implemented' });
};

/** Enable an app */
export const enable = async (req: Request, res: Response) => {
  // TODO: Implement enable
  res.json({ message: 'enable not implemented' });
};

/** Make an app available to the public */
export const publish = async (req: Request, res: Response) => {
  // TODO: Implement publish
  res.json({ message: 'publish not implemented' });
};

/** Make an app unavailable to the public */
export const unpublish = async (req: Request, res: Response) => {
  // TODO: Implement unpublish
  res.json({ message: 'unpublish not implemented' });
};