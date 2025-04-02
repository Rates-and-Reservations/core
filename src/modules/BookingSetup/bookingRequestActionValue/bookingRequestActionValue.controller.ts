import * as BookingRequestActionValueService from './bookingRequestActionValue.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingRequestActionValueService.createBookingRequestActionValue(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingRequestActionValueService.listBookingRequestActionValues();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingRequestActionValueService.getBookingRequestActionValueById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingRequestActionValueService.updateBookingRequestActionValue(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingRequestActionValueService.deleteBookingRequestActionValue(req.params.id);
  res.json(result);
};
