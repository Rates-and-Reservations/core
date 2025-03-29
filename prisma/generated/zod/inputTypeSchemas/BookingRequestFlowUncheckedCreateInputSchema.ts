import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BookingRequestFlowUncheckedCreateInputSchema: z.ZodType<Prisma.BookingRequestFlowUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  bookingRequestId: z.string(),
  merchantId: z.string(),
  uiTemplateId: z.string(),
  slug: z.string(),
  usageLimit: z.number().int().optional().nullable(),
  usageCount: z.number().int().optional(),
  webhookUrl: z.string().optional().nullable(),
  webhookEvents: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isActive: z.boolean().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BookingRequestFlowUncheckedCreateInputSchema;
