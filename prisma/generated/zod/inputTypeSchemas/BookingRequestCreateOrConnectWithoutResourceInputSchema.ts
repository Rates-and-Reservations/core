import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestCreateWithoutResourceInputSchema } from './BookingRequestCreateWithoutResourceInputSchema';
import { BookingRequestUncheckedCreateWithoutResourceInputSchema } from './BookingRequestUncheckedCreateWithoutResourceInputSchema';

export const BookingRequestCreateOrConnectWithoutResourceInputSchema: z.ZodType<Prisma.BookingRequestCreateOrConnectWithoutResourceInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutResourceInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default BookingRequestCreateOrConnectWithoutResourceInputSchema;
