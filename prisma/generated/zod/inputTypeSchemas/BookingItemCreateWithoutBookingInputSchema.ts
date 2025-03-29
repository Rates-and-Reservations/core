import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema } from './BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema } from './BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema';
import { CancellationRequestCreateNestedManyWithoutBookingItemInputSchema } from './CancellationRequestCreateNestedManyWithoutBookingItemInputSchema';

export const BookingItemCreateWithoutBookingInputSchema: z.ZodType<Prisma.BookingItemCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  status: z.lazy(() => BookingItemStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookingRateSnapshot: z.lazy(() => BookingRateSnapshotCreateNestedOneWithoutBookingItemInputSchema),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestCreateNestedManyWithoutBookingItemInputSchema).optional()
}).strict();

export default BookingItemCreateWithoutBookingInputSchema;
