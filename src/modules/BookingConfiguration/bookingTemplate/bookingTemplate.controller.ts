import * as BookingTemplateService from './bookingTemplate.service';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const result = await BookingTemplateService.createBookingTemplate(req.body);
  res.json(result);
};

export const list = async (_req: Request, res: Response) => {
  const results = await BookingTemplateService.listBookingTemplates();
  res.json(results);
};

export const getById = async (req: Request, res: Response) => {
  const result = await BookingTemplateService.getBookingTemplateById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await BookingTemplateService.updateBookingTemplate(req.params.id, req.body);
  res.json(result);
};

export const deleteOne = async (req: Request, res: Response) => {
  const result = await BookingTemplateService.deleteBookingTemplate(req.params.id);
  res.json(result);
};


/** Clone a booking template */
export const clone = async (req: Request, res: Response) => {
  // TODO: Implement clone
  res.json({ message: 'clone not implemented' });
};