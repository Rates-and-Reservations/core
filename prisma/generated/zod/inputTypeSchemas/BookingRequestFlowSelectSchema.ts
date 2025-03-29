import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestArgsSchema } from "../outputTypeSchemas/BookingRequestArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { UiTemplateArgsSchema } from "../outputTypeSchemas/UiTemplateArgsSchema"

export const BookingRequestFlowSelectSchema: z.ZodType<Prisma.BookingRequestFlowSelect> = z.object({
  id: z.boolean().optional(),
  bookingRequestId: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  uiTemplateId: z.boolean().optional(),
  slug: z.boolean().optional(),
  usageLimit: z.boolean().optional(),
  usageCount: z.boolean().optional(),
  webhookUrl: z.boolean().optional(),
  webhookEvents: z.boolean().optional(),
  isActive: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  bookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestArgsSchema)]).optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  uiTemplate: z.union([z.boolean(),z.lazy(() => UiTemplateArgsSchema)]).optional(),
}).strict()

export default BookingRequestFlowSelectSchema;
