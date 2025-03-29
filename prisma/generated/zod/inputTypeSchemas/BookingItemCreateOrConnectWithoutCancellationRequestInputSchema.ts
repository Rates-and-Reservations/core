import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemCreateWithoutCancellationRequestInputSchema } from './BookingItemCreateWithoutCancellationRequestInputSchema';
import { BookingItemUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingItemUncheckedCreateWithoutCancellationRequestInputSchema';

export const BookingItemCreateOrConnectWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingItemCreateOrConnectWithoutCancellationRequestInput> = z.object({
  where: z.lazy(() => BookingItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutCancellationRequestInputSchema) ]),
}).strict();

export default BookingItemCreateOrConnectWithoutCancellationRequestInputSchema;
