import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutCustomerInputSchema } from './BookingRequestUpdateWithoutCustomerInputSchema';
import { BookingRequestUncheckedUpdateWithoutCustomerInputSchema } from './BookingRequestUncheckedUpdateWithoutCustomerInputSchema';

export const BookingRequestUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.BookingRequestUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateWithoutCustomerInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default BookingRequestUpdateWithWhereUniqueWithoutCustomerInputSchema;
