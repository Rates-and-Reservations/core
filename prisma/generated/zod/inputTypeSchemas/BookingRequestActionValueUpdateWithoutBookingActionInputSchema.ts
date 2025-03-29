import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema } from './BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema';

export const BookingRequestActionValueUpdateWithoutBookingActionInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateWithoutBookingActionInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  completedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookingRequest: z.lazy(() => BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema).optional()
}).strict();

export default BookingRequestActionValueUpdateWithoutBookingActionInputSchema;
