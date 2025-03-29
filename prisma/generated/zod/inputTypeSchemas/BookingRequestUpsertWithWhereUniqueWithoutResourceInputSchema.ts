import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutResourceInputSchema } from './BookingRequestUpdateWithoutResourceInputSchema';
import { BookingRequestUncheckedUpdateWithoutResourceInputSchema } from './BookingRequestUncheckedUpdateWithoutResourceInputSchema';
import { BookingRequestCreateWithoutResourceInputSchema } from './BookingRequestCreateWithoutResourceInputSchema';
import { BookingRequestUncheckedCreateWithoutResourceInputSchema } from './BookingRequestUncheckedCreateWithoutResourceInputSchema';

export const BookingRequestUpsertWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.BookingRequestUpsertWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithoutResourceInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutResourceInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutResourceInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default BookingRequestUpsertWithWhereUniqueWithoutResourceInputSchema;
