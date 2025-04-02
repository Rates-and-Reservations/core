import * as BookingActivityLogService from './bookingActivityLog.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingActivityLogService.createBookingActivityLog(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingActivityLogService.listBookingActivityLogs();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingActivityLogService.getBookingActivityLogById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingActivityLogService.updateBookingActivityLog(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingActivityLogService.deleteBookingActivityLog(req.params.id);
  res.json(result);
};
