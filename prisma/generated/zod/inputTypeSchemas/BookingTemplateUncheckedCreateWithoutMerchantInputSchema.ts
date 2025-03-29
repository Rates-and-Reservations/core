import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SelectionModeSchema } from './SelectionModeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingActionUncheckedCreateNestedManyWithoutBookingTemplateInputSchema } from './BookingActionUncheckedCreateNestedManyWithoutBookingTemplateInputSchema';
import { BookingRequestUncheckedCreateNestedManyWithoutTemplateInputSchema } from './BookingRequestUncheckedCreateNestedManyWithoutTemplateInputSchema';

export const BookingTemplateUncheckedCreateWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateUncheckedCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  selectionMode: z.lazy(() => SelectionModeSchema),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  actions: z.lazy(() => BookingActionUncheckedCreateNestedManyWithoutBookingTemplateInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default BookingTemplateUncheckedCreateWithoutMerchantInputSchema;
