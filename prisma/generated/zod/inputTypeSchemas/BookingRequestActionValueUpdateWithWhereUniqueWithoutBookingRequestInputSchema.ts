import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueUpdateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUpdateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedUpdateWithoutBookingRequestInputSchema';

export const BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestActionValueUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUncheckedUpdateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestActionValueUpdateWithWhereUniqueWithoutBookingRequestInputSchema;
