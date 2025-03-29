import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutCustomerInputSchema } from './BookingUpdateWithoutCustomerInputSchema';
import { BookingUncheckedUpdateWithoutCustomerInputSchema } from './BookingUncheckedUpdateWithoutCustomerInputSchema';

export const BookingUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutCustomerInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutCustomerInputSchema;
