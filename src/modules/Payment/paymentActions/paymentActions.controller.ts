import * as PaymentActionsService from './paymentActions.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await PaymentActionsService.createPaymentActions(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await PaymentActionsService.listPaymentActionss();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await PaymentActionsService.getPaymentActionsById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await PaymentActionsService.updatePaymentActions(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await PaymentActionsService.deletePaymentActions(req.params.id);
  res.json(result);
};
