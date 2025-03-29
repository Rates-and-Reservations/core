import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemStatusSchema } from './BookingItemStatusSchema';
import { BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema } from './BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema';
import { CancellationRequestUncheckedCreateNestedManyWithoutBookingItemInputSchema } from './CancellationRequestUncheckedCreateNestedManyWithoutBookingItemInputSchema';

export const BookingItemUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.BookingItemUncheckedCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  bookingRateSnapshotId: z.string(),
  status: z.lazy(() => BookingItemStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUncheckedCreateNestedManyWithoutBookingItemInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestUncheckedCreateNestedManyWithoutBookingItemInputSchema).optional()
}).strict();

export default BookingItemUncheckedCreateWithoutBookingInputSchema;
