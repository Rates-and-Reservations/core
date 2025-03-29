import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { EnumBookingRequestStatusFieldUpdateOperationsInputSchema } from './EnumBookingRequestStatusFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingRequestFlowUncheckedUpdateManyWithoutBookingRequestNestedInputSchema } from './BookingRequestFlowUncheckedUpdateManyWithoutBookingRequestNestedInputSchema';
import { BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestNestedInputSchema } from './BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestNestedInputSchema';
import { BookingUncheckedUpdateManyWithoutBookingRequestNestedInputSchema } from './BookingUncheckedUpdateManyWithoutBookingRequestNestedInputSchema';

export const BookingRequestUncheckedUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.BookingRequestUncheckedUpdateWithoutCustomerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  merchantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prefilledFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  resourceId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  templateId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => BookingRequestStatusSchema),z.lazy(() => EnumBookingRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  actionStatus: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  finalizedSnapshot: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowUncheckedUpdateManyWithoutBookingRequestNestedInputSchema).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUncheckedUpdateManyWithoutBookingRequestNestedInputSchema).optional()
}).strict();

export default BookingRequestUncheckedUpdateWithoutCustomerInputSchema;
