import * as CustomerService from './customer.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await CustomerService.createCustomer(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await CustomerService.listCustomers();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await CustomerService.getCustomerById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await CustomerService.updateCustomer(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await CustomerService.deleteCustomer(req.params.id);
  res.json(result);
};
