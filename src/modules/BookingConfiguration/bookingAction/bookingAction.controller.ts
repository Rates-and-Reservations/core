import * as BookingActionService from './bookingAction.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingActionService.createBookingAction(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingActionService.listBookingActions();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingActionService.getBookingActionById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingActionService.updateBookingAction(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingActionService.deleteBookingAction(req.params.id);
  res.json(result);
};
