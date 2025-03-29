import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutBookingRequestFlowInputSchema } from './MerchantCreateNestedOneWithoutBookingRequestFlowInputSchema';
import { UiTemplateCreateNestedOneWithoutBookingRequestFlowInputSchema } from './UiTemplateCreateNestedOneWithoutBookingRequestFlowInputSchema';

export const BookingRequestFlowCreateWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestFlowCreateWithoutBookingRequestInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  usageLimit: z.number().int().optional().nullable(),
  usageCount: z.number().int().optional(),
  webhookUrl: z.string().optional().nullable(),
  webhookEvents: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isActive: z.boolean().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutBookingRequestFlowInputSchema),
  uiTemplate: z.lazy(() => UiTemplateCreateNestedOneWithoutBookingRequestFlowInputSchema)
}).strict();

export default BookingRequestFlowCreateWithoutBookingRequestInputSchema;
