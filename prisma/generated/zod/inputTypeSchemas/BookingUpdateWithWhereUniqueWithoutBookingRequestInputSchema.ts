import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutBookingRequestInputSchema } from './BookingUpdateWithoutBookingRequestInputSchema';
import { BookingUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingUncheckedUpdateWithoutBookingRequestInputSchema';

export const BookingUpdateWithWhereUniqueWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutBookingRequestInputSchema;
