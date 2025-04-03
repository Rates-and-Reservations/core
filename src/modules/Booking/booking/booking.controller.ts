import * as BookingService from './booking.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingService.createBooking(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingService.listBookings();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingService.getBookingById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingService.updateBooking(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingService.deleteBooking(req.params.id);
  res.json(result);
};


/** Cancel a booking */
export const cancel = async (req: Request, res: Response) => {
  // TODO: Implement cancel
  res.json({ message: 'cancel not implemented' });
};

/** Update the status of a booking */
export const updateStatus = async (req: Request, res: Response) => {
  // TODO: Implement updateStatus
  res.json({ message: 'updateStatus not implemented' });
};