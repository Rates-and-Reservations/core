import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema';

export const BookingItemUncheckedCreateWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingItemUncheckedCreateWithoutCancellationRequestInput> = z.object({
  id: z.string().cuid().optional(),
  bookingId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  bookingRateSnapshotId: z.string(),
  status: z.lazy(() => BookingItemStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema).optional()
}).strict();

export default BookingItemUncheckedCreateWithoutCancellationRequestInputSchema;
