import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogUpdateWithoutBookingInputSchema } from './BookingActivityLogUpdateWithoutBookingInputSchema';
import { BookingActivityLogUncheckedUpdateWithoutBookingInputSchema } from './BookingActivityLogUncheckedUpdateWithoutBookingInputSchema';
import { BookingActivityLogCreateWithoutBookingInputSchema } from './BookingActivityLogCreateWithoutBookingInputSchema';
import { BookingActivityLogUncheckedCreateWithoutBookingInputSchema } from './BookingActivityLogUncheckedCreateWithoutBookingInputSchema';

export const BookingActivityLogUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.BookingActivityLogUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingActivityLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingActivityLogUpdateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutBookingInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default BookingActivityLogUpsertWithWhereUniqueWithoutBookingInputSchema;
