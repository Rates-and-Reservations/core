import * as DiscountService from './discount.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await DiscountService.createDiscount(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await DiscountService.listDiscounts();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await DiscountService.getDiscountById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await DiscountService.updateDiscount(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await DiscountService.deleteDiscount(req.params.id);
  res.json(result);
};
