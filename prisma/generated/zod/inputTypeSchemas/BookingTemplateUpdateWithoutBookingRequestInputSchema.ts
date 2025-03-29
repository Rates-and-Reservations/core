import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SelectionModeSchema } from './SelectionModeSchema';
import { EnumSelectionModeFieldUpdateOperationsInputSchema } from './EnumSelectionModeFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutBookingTemplateNestedInputSchema } from './MerchantUpdateOneRequiredWithoutBookingTemplateNestedInputSchema';
import { BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema } from './BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema';

export const BookingTemplateUpdateWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingTemplateUpdateWithoutBookingRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selectionMode: z.union([ z.lazy(() => SelectionModeSchema),z.lazy(() => EnumSelectionModeFieldUpdateOperationsInputSchema) ]).optional(),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutBookingTemplateNestedInputSchema).optional(),
  actions: z.lazy(() => BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema).optional()
}).strict();

export default BookingTemplateUpdateWithoutBookingRequestInputSchema;
