import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SelectionModeSchema } from './SelectionModeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutBookingTemplateInputSchema } from './MerchantCreateNestedOneWithoutBookingTemplateInputSchema';
import { BookingRequestCreateNestedManyWithoutTemplateInputSchema } from './BookingRequestCreateNestedManyWithoutTemplateInputSchema';

export const BookingTemplateCreateWithoutActionsInputSchema: z.ZodType<Prisma.BookingTemplateCreateWithoutActionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  selectionMode: z.lazy(() => SelectionModeSchema),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutBookingTemplateInputSchema),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default BookingTemplateCreateWithoutActionsInputSchema;
