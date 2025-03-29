import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';
import { BookingRequestUpdateManyMutationInputSchema } from './BookingRequestUpdateManyMutationInputSchema';
import { BookingRequestUncheckedUpdateManyWithoutResourceInputSchema } from './BookingRequestUncheckedUpdateManyWithoutResourceInputSchema';

export const BookingRequestUpdateManyWithWhereWithoutResourceInputSchema: z.ZodType<Prisma.BookingRequestUpdateManyWithWhereWithoutResourceInput> = z.object({
  where: z.lazy(() => BookingRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateManyMutationInputSchema),z.lazy(() => BookingRequestUncheckedUpdateManyWithoutResourceInputSchema) ]),
}).strict();

export default BookingRequestUpdateManyWithWhereWithoutResourceInputSchema;
