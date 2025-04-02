import * as ApiKeyService from './apiKey.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await ApiKeyService.createApiKey(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await ApiKeyService.listApiKeys();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await ApiKeyService.getApiKeyById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await ApiKeyService.updateApiKey(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await ApiKeyService.deleteApiKey(req.params.id);
  res.json(result);
};
