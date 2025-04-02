import * as BookingItemAddOnService from './bookingItemAddOn.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingItemAddOnService.createBookingItemAddOn(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingItemAddOnService.listBookingItemAddOns();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingItemAddOnService.getBookingItemAddOnById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingItemAddOnService.updateBookingItemAddOn(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingItemAddOnService.deleteBookingItemAddOn(req.params.id);
  res.json(result);
};
