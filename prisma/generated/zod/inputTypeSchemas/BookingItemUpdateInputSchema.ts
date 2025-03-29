import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { EnumBookingItemStatusFieldUpdateOperationsInputSchema } from './EnumBookingItemStatusFieldUpdateOperationsInputSchema';
import { BookingUpdateOneRequiredWithoutBookingItemNestedInputSchema } from './BookingUpdateOneRequiredWithoutBookingItemNestedInputSchema';
import { BookingRateSnapshotUpdateOneRequiredWithoutBookingItemNestedInputSchema } from './BookingRateSnapshotUpdateOneRequiredWithoutBookingItemNestedInputSchema';
import { BookingItemAddOnUpdateManyWithoutBookingItemNestedInputSchema } from './BookingItemAddOnUpdateManyWithoutBookingItemNestedInputSchema';
import { CancellationRequestUpdateManyWithoutBookingItemNestedInputSchema } from './CancellationRequestUpdateManyWithoutBookingItemNestedInputSchema';

export const BookingItemUpdateInputSchema: z.ZodType<Prisma.BookingItemUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => BookingItemStatusSchema),z.lazy(() => EnumBookingItemStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  booking: z.lazy(() => BookingUpdateOneRequiredWithoutBookingItemNestedInputSchema).optional(),
  bookingRateSnapshot: z.lazy(() => BookingRateSnapshotUpdateOneRequiredWithoutBookingItemNestedInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUpdateManyWithoutBookingItemNestedInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestUpdateManyWithoutBookingItemNestedInputSchema).optional()
}).strict();

export default BookingItemUpdateInputSchema;
