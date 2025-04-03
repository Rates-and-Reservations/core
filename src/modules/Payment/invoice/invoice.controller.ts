import * as InvoiceService from './invoice.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await InvoiceService.createInvoice(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await InvoiceService.listInvoices();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await InvoiceService.getInvoiceById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await InvoiceService.updateInvoice(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await InvoiceService.deleteInvoice(req.params.id);
  res.json(result);
};


/** Download an invoice */
export const download = async (req: Request, res: Response) => {
  // TODO: Implement download
  res.json({ message: 'download not implemented' });
};

/** Update the status of an invoice */
export const updateStatus = async (req: Request, res: Response) => {
  // TODO: Implement updateStatus
  res.json({ message: 'updateStatus not implemented' });
};