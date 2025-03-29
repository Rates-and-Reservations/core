import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutBookingAddOnInputSchema } from './BookingUpdateWithoutBookingAddOnInputSchema';
import { BookingUncheckedUpdateWithoutBookingAddOnInputSchema } from './BookingUncheckedUpdateWithoutBookingAddOnInputSchema';
import { BookingCreateWithoutBookingAddOnInputSchema } from './BookingCreateWithoutBookingAddOnInputSchema';
import { BookingUncheckedCreateWithoutBookingAddOnInputSchema } from './BookingUncheckedCreateWithoutBookingAddOnInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutBookingAddOnInputSchema: z.ZodType<Prisma.BookingUpsertWithoutBookingAddOnInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutBookingAddOnInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingAddOnInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingAddOnInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutBookingAddOnInputSchema;
