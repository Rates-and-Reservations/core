import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutResourceInputSchema } from './BookingRequestUpdateWithoutResourceInputSchema';
import { BookingRequestUncheckedUpdateWithoutResourceInputSchema } from './BookingRequestUncheckedUpdateWithoutResourceInputSchema';

export const BookingRequestUpdateWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.BookingRequestUpdateWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateWithoutResourceInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutResourceInputSchema) ]),
}).strict();

export default BookingRequestUpdateWithWhereUniqueWithoutResourceInputSchema;
