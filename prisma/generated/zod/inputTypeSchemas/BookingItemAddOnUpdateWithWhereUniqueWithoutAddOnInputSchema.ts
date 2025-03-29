import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnUpdateWithoutAddOnInputSchema } from './BookingItemAddOnUpdateWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedUpdateWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedUpdateWithoutAddOnInputSchema';

export const BookingItemAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema: z.ZodType<Prisma.BookingItemAddOnUpdateWithWhereUniqueWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingItemAddOnUpdateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUncheckedUpdateWithoutAddOnInputSchema) ]),
}).strict();

export default BookingItemAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema;
