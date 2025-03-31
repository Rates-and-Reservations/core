import { Request, Response } from "express";
import * as merchantService from "@/services/merchant.service";
import { NotFoundError } from "@/errors";

export async function createMerchant(req: Request, res: Response) {
  const merchant = await merchantService.createMerchant(req.body);
  res.status(201).json(merchant);
}

export async function getMerchants(req: Request, res: Response) {
  const merchants = await merchantService.listMerchants();
  res.json(merchants);
}

export async function getMerchant(req: Request, res: Response) {
  const merchant = await merchantService.getMerchantById(req.params.id);
  if (!merchant) {
    throw new NotFoundError('Merchant')
  }
  res.json(merchant);
}

export async function updateMerchant(req: Request, res: Response) {
  const merchant = await merchantService.updateMerchant(req.params.id, req.body);
  if (!merchant) {
    throw new NotFoundError('Merchant')
  }
  res.json(merchant);
}

export async function disableMerchanr(req: Request, res: Response) {
  const merchant = await merchantService.updateMerchant(req.params.id, { isActive: false, disabledAt: new Date() });
  if (!merchant) {
    throw new NotFoundError('Merchant')
  }
  res.status(204).end();
}

export async function enableMerchant(req: Request, res: Response) {
  const merchant = await merchantService.updateMerchant(req.params.id, { isActive: true, disabledAt: null });
  if (!merchant) {
    throw new NotFoundError('Merchant')
  }
  res.status(204).end();
}

export async function deleteMerchant(req: Request, res: Response) {
  await merchantService.deleteMerchant(req.params.id);
  res.status(204).end();
}

export async function verifyMerchant(req: Request, res: Response) {
  const merchant = await merchantService.updateMerchant(req.params.id, { isVerified: true, verifiedAt: new Date() });
  if (!merchant) {
    throw new NotFoundError('Merchant')
  }
  res.status(204).end();
}

export async function unverifyMerchant(req: Request, res: Response) {
  const merchant = await merchantService.updateMerchant(req.params.id, { isVerified: false, verifiedAt: null });
  if (!merchant) {
    throw new NotFoundError('Merchant')
  }
  res.status(204).end();
}