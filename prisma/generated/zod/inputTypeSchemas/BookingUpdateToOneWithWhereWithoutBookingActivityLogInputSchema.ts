import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutBookingActivityLogInputSchema } from './BookingUpdateWithoutBookingActivityLogInputSchema';
import { BookingUncheckedUpdateWithoutBookingActivityLogInputSchema } from './BookingUncheckedUpdateWithoutBookingActivityLogInputSchema';

export const BookingUpdateToOneWithWhereWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutBookingActivityLogInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingActivityLogInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutBookingActivityLogInputSchema;
