import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { BookingCreateNestedOneWithoutBookingItemInputSchema } from './BookingCreateNestedOneWithoutBookingItemInputSchema';
import { BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema } from './BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema';
import { CancellationRequestCreateNestedManyWithoutBookingItemInputSchema } from './CancellationRequestCreateNestedManyWithoutBookingItemInputSchema';

export const BookingItemCreateWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemCreateWithoutBookingRateSnapshotInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  status: z.lazy(() => BookingItemStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  booking: z.lazy(() => BookingCreateNestedOneWithoutBookingItemInputSchema),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnCreateNestedManyWithoutBookingItemInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestCreateNestedManyWithoutBookingItemInputSchema).optional()
}).strict();

export default BookingItemCreateWithoutBookingRateSnapshotInputSchema;
