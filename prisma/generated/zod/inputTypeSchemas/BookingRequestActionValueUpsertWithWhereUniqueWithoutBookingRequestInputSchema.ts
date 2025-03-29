import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueUpdateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUpdateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedUpdateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueCreateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema';

export const BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestActionValueUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUncheckedUpdateWithoutBookingRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestActionValueUpsertWithWhereUniqueWithoutBookingRequestInputSchema;
