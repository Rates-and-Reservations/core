import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { BookingRequestFlowUncheckedCreateNestedManyWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedCreateNestedManyWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUncheckedCreateNestedManyWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedCreateNestedManyWithoutBookingRequestInputSchema';

export const BookingRequestUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.BookingRequestUncheckedCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  prefilledFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  customerId: z.string().optional().nullable(),
  resourceId: z.string().optional().nullable(),
  templateId: z.string(),
  expiresAt: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  status: z.lazy(() => BookingRequestStatusSchema),
  actionStatus: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  finalizedSnapshot: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowUncheckedCreateNestedManyWithoutBookingRequestInputSchema).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueUncheckedCreateNestedManyWithoutBookingRequestInputSchema).optional()
}).strict();

export default BookingRequestUncheckedCreateWithoutBookingInputSchema;
