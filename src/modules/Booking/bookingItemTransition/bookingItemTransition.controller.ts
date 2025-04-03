import * as BookingItemTransitionService from './bookingItemTransition.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingItemTransitionService.createBookingItemTransition(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingItemTransitionService.listBookingItemTransitions();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingItemTransitionService.getBookingItemTransitionById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingItemTransitionService.updateBookingItemTransition(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingItemTransitionService.deleteBookingItemTransition(req.params.id);
  res.json(result);
};
