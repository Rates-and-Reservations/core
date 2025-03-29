import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { EnumBookingItemStatusFieldUpdateOperationsInputSchema } from './EnumBookingItemStatusFieldUpdateOperationsInputSchema';
import { CancellationRequestUncheckedUpdateManyWithoutBookingItemNestedInputSchema } from './CancellationRequestUncheckedUpdateManyWithoutBookingItemNestedInputSchema';

export const BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.BookingItemUncheckedUpdateWithoutBookingItemAddOnInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookingRateSnapshotId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => BookingItemStatusSchema),z.lazy(() => EnumBookingItemStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestUncheckedUpdateManyWithoutBookingItemNestedInputSchema).optional()
}).strict();

export default BookingItemUncheckedUpdateWithoutBookingItemAddOnInputSchema;
