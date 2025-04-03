import * as BookingTransitionService from './bookingTransition.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingTransitionService.createBookingTransition(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingTransitionService.listBookingTransitions();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingTransitionService.getBookingTransitionById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingTransitionService.updateBookingTransition(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingTransitionService.deleteBookingTransition(req.params.id);
  res.json(result);
};
