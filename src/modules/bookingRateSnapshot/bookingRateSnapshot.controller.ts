import * as BookingRateSnapshotService from './bookingRateSnapshot.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingRateSnapshotService.createBookingRateSnapshot(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingRateSnapshotService.listBookingRateSnapshots();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingRateSnapshotService.getBookingRateSnapshotById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingRateSnapshotService.updateBookingRateSnapshot(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingRateSnapshotService.deleteBookingRateSnapshot(req.params.id);
  res.json(result);
};
