import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SelectionModeSchema } from './SelectionModeSchema';
import { EnumSelectionModeFieldUpdateOperationsInputSchema } from './EnumSelectionModeFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema } from './BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema';
import { BookingRequestUpdateManyWithoutTemplateNestedInputSchema } from './BookingRequestUpdateManyWithoutTemplateNestedInputSchema';

export const BookingTemplateUpdateWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateUpdateWithoutMerchantInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selectionMode: z.union([ z.lazy(() => SelectionModeSchema),z.lazy(() => EnumSelectionModeFieldUpdateOperationsInputSchema) ]).optional(),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  actions: z.lazy(() => BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUpdateManyWithoutTemplateNestedInputSchema).optional()
}).strict();

export default BookingTemplateUpdateWithoutMerchantInputSchema;
