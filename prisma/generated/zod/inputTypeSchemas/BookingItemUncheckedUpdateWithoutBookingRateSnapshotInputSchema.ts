import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { EnumBookingItemStatusFieldUpdateOperationsInputSchema } from './EnumBookingItemStatusFieldUpdateOperationsInputSchema';
import { BookingItemAddOnUncheckedUpdateManyWithoutBookingItemNestedInputSchema } from './BookingItemAddOnUncheckedUpdateManyWithoutBookingItemNestedInputSchema';
import { CancellationRequestUncheckedUpdateManyWithoutBookingItemNestedInputSchema } from './CancellationRequestUncheckedUpdateManyWithoutBookingItemNestedInputSchema';

export const BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemUncheckedUpdateWithoutBookingRateSnapshotInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => BookingItemStatusSchema),z.lazy(() => EnumBookingItemStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUncheckedUpdateManyWithoutBookingItemNestedInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestUncheckedUpdateManyWithoutBookingItemNestedInputSchema).optional()
}).strict();

export default BookingItemUncheckedUpdateWithoutBookingRateSnapshotInputSchema;
