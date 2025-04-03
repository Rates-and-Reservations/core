import * as InvoiceItemService from './invoiceItem.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await InvoiceItemService.createInvoiceItem(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await InvoiceItemService.listInvoiceItems();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await InvoiceItemService.getInvoiceItemById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await InvoiceItemService.updateInvoiceItem(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await InvoiceItemService.deleteInvoiceItem(req.params.id);
  res.json(result);
};
