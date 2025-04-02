import * as BookingAddOnService from './bookingAddOn.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingAddOnService.createBookingAddOn(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingAddOnService.listBookingAddOns();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingAddOnService.getBookingAddOnById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingAddOnService.updateBookingAddOn(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingAddOnService.deleteBookingAddOn(req.params.id);
  res.json(result);
};
