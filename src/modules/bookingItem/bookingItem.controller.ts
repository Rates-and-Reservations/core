import * as BookingItemService from './bookingItem.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingItemService.createBookingItem(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingItemService.listBookingItems();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingItemService.getBookingItemById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingItemService.updateBookingItem(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingItemService.deleteBookingItem(req.params.id);
  res.json(result);
};
