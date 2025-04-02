import * as OAuthTokenService from './oAuthToken.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await OAuthTokenService.createOAuthToken(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await OAuthTokenService.listOAuthTokens();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await OAuthTokenService.getOAuthTokenById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await OAuthTokenService.updateOAuthToken(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await OAuthTokenService.deleteOAuthToken(req.params.id);
  res.json(result);
};
