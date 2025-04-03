import * as InvoiceHistoryService from './invoiceHistory.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await InvoiceHistoryService.createInvoiceHistory(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await InvoiceHistoryService.listInvoiceHistorys();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await InvoiceHistoryService.getInvoiceHistoryById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await InvoiceHistoryService.updateInvoiceHistory(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await InvoiceHistoryService.deleteInvoiceHistory(req.params.id);
  res.json(result);
};
