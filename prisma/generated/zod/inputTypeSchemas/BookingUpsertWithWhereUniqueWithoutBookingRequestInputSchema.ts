import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutBookingRequestInputSchema } from './BookingUpdateWithoutBookingRequestInputSchema';
import { BookingUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingUncheckedUpdateWithoutBookingRequestInputSchema';
import { BookingCreateWithoutBookingRequestInputSchema } from './BookingCreateWithoutBookingRequestInputSchema';
import { BookingUncheckedCreateWithoutBookingRequestInputSchema } from './BookingUncheckedCreateWithoutBookingRequestInputSchema';

export const BookingUpsertWithWhereUniqueWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutBookingRequestInputSchema;
