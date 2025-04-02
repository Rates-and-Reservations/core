import * as InvoicePaymentService from './invoicePayment.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await InvoicePaymentService.createInvoicePayment(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await InvoicePaymentService.listInvoicePayments();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await InvoicePaymentService.getInvoicePaymentById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await InvoicePaymentService.updateInvoicePayment(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await InvoicePaymentService.deleteInvoicePayment(req.params.id);
  res.json(result);
};
