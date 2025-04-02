import { Request, Response } from "express";
import * as merchantUserService from "@/services/merchantuser.service";
import * as notificationService from "@/services/notification.service";

export const listMerchantUsers = async (req: Request, res: Response) => {
  const merchantId = req.headers["x-merchant-id"] as string;
  const merchantUsers = await merchantUserService.listMerchantUsers({ merchantId });
  res.json(merchantUsers);
}

export const inviteMerchantUser = async (req: Request, res: Response) => {
  const { body } = req;
  const merchantUser = await merchantUserService.createMerchantUser({ ...body, isVerified: false });
  notificationService.createNotification({
    type: "MERCHANT_USER_INVITE",
    merchant: body.merchantId,
    channel: "EMAIL",
    recipient: body.email,
    subject: "Merchant User Invite",
    message: `You have been invited to join the merchant ${body.merchantId}. Please verify your email address.`,
  })
  res.status(201).json(merchantUser);
}

export const verifyMerchantUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const merchantUser = await merchantUserService.updateMerchantUser(id, { isVerified: true });
  res.json(merchantUser);
}

export const deleteMerchantUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await merchantUserService.deleteMerchantUser(id);
  res.status(204).send();
}

export const updateMerchantUserRole = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const merchantUser = await merchantUserService.updateMerchantUser(id, { role: body.role });
  res.json(merchantUser);
}