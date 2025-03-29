import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';
import { BookingItemUpdateWithoutCancellationRequestInputSchema } from './BookingItemUpdateWithoutCancellationRequestInputSchema';
import { BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema } from './BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema';

export const BookingItemUpdateToOneWithWhereWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingItemUpdateToOneWithWhereWithoutCancellationRequestInput> = z.object({
  where: z.lazy(() => BookingItemWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingItemUpdateWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema) ]),
}).strict();

export default BookingItemUpdateToOneWithWhereWithoutCancellationRequestInputSchema;
