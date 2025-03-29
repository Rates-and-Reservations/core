import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnUpdateWithoutBookingInputSchema } from './BookingAddOnUpdateWithoutBookingInputSchema';
import { BookingAddOnUncheckedUpdateWithoutBookingInputSchema } from './BookingAddOnUncheckedUpdateWithoutBookingInputSchema';
import { BookingAddOnCreateWithoutBookingInputSchema } from './BookingAddOnCreateWithoutBookingInputSchema';
import { BookingAddOnUncheckedCreateWithoutBookingInputSchema } from './BookingAddOnUncheckedCreateWithoutBookingInputSchema';

export const BookingAddOnUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.BookingAddOnUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingAddOnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingAddOnUpdateWithoutBookingInputSchema),z.lazy(() => BookingAddOnUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutBookingInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default BookingAddOnUpsertWithWhereUniqueWithoutBookingInputSchema;
