import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { BookingCreateNestedOneWithoutBookingItemInputSchema } from './BookingCreateNestedOneWithoutBookingItemInputSchema';
import { BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema } from './BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema';
import { CancellationRequestCreateNestedManyWithoutBookingItemInputSchema } from './CancellationRequestCreateNestedManyWithoutBookingItemInputSchema';

export const BookingItemCreateInputSchema: z.ZodType<Prisma.BookingItemCreateInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  status: z.lazy(() => BookingItemStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  booking: z.lazy(() => BookingCreateNestedOneWithoutBookingItemInputSchema),
  bookingRateSnapshot: z.lazy(() => BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestCreateNestedManyWithoutBookingItemInputSchema).optional()
}).strict();

export default BookingItemCreateInputSchema;
