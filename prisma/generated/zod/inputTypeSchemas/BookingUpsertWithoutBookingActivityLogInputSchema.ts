import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutBookingActivityLogInputSchema } from './BookingUpdateWithoutBookingActivityLogInputSchema';
import { BookingUncheckedUpdateWithoutBookingActivityLogInputSchema } from './BookingUncheckedUpdateWithoutBookingActivityLogInputSchema';
import { BookingCreateWithoutBookingActivityLogInputSchema } from './BookingCreateWithoutBookingActivityLogInputSchema';
import { BookingUncheckedCreateWithoutBookingActivityLogInputSchema } from './BookingUncheckedCreateWithoutBookingActivityLogInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.BookingUpsertWithoutBookingActivityLogInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingActivityLogInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingActivityLogInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutBookingActivityLogInputSchema;
