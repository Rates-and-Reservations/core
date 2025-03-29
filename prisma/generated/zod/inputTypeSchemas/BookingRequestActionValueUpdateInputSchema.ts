import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingActionUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema } from './BookingActionUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema';
import { BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema } from './BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema';

export const BookingRequestActionValueUpdateInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  completedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookingAction: z.lazy(() => BookingActionUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema).optional(),
  bookingRequest: z.lazy(() => BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema).optional()
}).strict();

export default BookingRequestActionValueUpdateInputSchema;
