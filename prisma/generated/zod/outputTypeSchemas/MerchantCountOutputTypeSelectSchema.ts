import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MerchantCountOutputTypeSelectSchema: z.ZodType<Prisma.MerchantCountOutputTypeSelect> = z.object({
  MerchantContact: z.boolean().optional(),
  MerchantUser: z.boolean().optional(),
  MerchantAsset: z.boolean().optional(),
  ApiKey: z.boolean().optional(),
  ResourceTemplate: z.boolean().optional(),
  Resource: z.boolean().optional(),
  Rate: z.boolean().optional(),
  Discount: z.boolean().optional(),
  PaymentActions: z.boolean().optional(),
  Customer: z.boolean().optional(),
  BookingRequest: z.boolean().optional(),
  Booking: z.boolean().optional(),
  AddOn: z.boolean().optional(),
  BookingRequestFlow: z.boolean().optional(),
  Notification: z.boolean().optional(),
  WebhookEndpoint: z.boolean().optional(),
  WebhookEvent: z.boolean().optional(),
  AuditLog: z.boolean().optional(),
  WaitlistEntry: z.boolean().optional(),
  Invoice: z.boolean().optional(),
  BookingActivityLog: z.boolean().optional(),
  RefundRequest: z.boolean().optional(),
  ApiUsageLog: z.boolean().optional(),
  ApiUsageStat: z.boolean().optional(),
  App: z.boolean().optional(),
  AppInstall: z.boolean().optional(),
  OAuthToken: z.boolean().optional(),
  BookingTemplate: z.boolean().optional(),
  UiTemplate: z.boolean().optional(),
  CancellationPolicy: z.boolean().optional(),
}).strict();

export default MerchantCountOutputTypeSelectSchema;
