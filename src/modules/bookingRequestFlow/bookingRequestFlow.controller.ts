import * as BookingRequestFlowService from './bookingRequestFlow.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingRequestFlowService.createBookingRequestFlow(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingRequestFlowService.listBookingRequestFlows();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingRequestFlowService.getBookingRequestFlowById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingRequestFlowService.updateBookingRequestFlow(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingRequestFlowService.deleteBookingRequestFlow(req.params.id);
  res.json(result);
};
