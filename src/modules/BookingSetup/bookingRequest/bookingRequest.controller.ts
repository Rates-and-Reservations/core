import * as BookingRequestService from './bookingRequest.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingRequestService.createBookingRequest(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingRequestService.listBookingRequests();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingRequestService.getBookingRequestById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingRequestService.updateBookingRequest(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingRequestService.deleteBookingRequest(req.params.id);
  res.json(result);
};


/** Cancel a booking request */
export const cancel = async (req: Request, res: Response) => {
  // TODO: Implement cancel
  res.json({ message: 'cancel not implemented' });
};

/** Complete a booking request */
export const complete = async (req: Request, res: Response) => {
  // TODO: Implement complete
  res.json({ message: 'complete not implemented' });
};