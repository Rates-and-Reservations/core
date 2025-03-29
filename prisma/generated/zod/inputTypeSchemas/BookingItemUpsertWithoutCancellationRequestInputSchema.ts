import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemUpdateWithoutCancellationRequestInputSchema } from './BookingItemUpdateWithoutCancellationRequestInputSchema';
import { BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema } from './BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema';
import { BookingItemCreateWithoutCancellationRequestInputSchema } from './BookingItemCreateWithoutCancellationRequestInputSchema';
import { BookingItemUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingItemUncheckedCreateWithoutCancellationRequestInputSchema';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';

export const BookingItemUpsertWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingItemUpsertWithoutCancellationRequestInput> = z.object({
  update: z.union([ z.lazy(() => BookingItemUpdateWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BookingItemCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutCancellationRequestInputSchema) ]),
  where: z.lazy(() => BookingItemWhereInputSchema).optional()
}).strict();

export default BookingItemUpsertWithoutCancellationRequestInputSchema;
