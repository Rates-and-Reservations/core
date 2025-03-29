import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutBookingAddOnInputSchema } from './BookingUpdateWithoutBookingAddOnInputSchema';
import { BookingUncheckedUpdateWithoutBookingAddOnInputSchema } from './BookingUncheckedUpdateWithoutBookingAddOnInputSchema';

export const BookingUpdateToOneWithWhereWithoutBookingAddOnInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutBookingAddOnInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutBookingAddOnInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutBookingAddOnInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutBookingAddOnInputSchema;
