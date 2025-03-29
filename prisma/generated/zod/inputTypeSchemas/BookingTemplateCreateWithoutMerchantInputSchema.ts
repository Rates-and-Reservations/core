import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SelectionModeSchema } from './SelectionModeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingActionCreateNestedManyWithoutBookingTemplateInputSchema } from './BookingActionCreateNestedManyWithoutBookingTemplateInputSchema';
import { BookingRequestCreateNestedManyWithoutTemplateInputSchema } from './BookingRequestCreateNestedManyWithoutTemplateInputSchema';

export const BookingTemplateCreateWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  selectionMode: z.lazy(() => SelectionModeSchema),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  actions: z.lazy(() => BookingActionCreateNestedManyWithoutBookingTemplateInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default BookingTemplateCreateWithoutMerchantInputSchema;
