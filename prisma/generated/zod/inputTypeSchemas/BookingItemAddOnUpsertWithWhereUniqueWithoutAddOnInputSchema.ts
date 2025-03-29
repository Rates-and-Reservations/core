import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnUpdateWithoutAddOnInputSchema } from './BookingItemAddOnUpdateWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedUpdateWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedUpdateWithoutAddOnInputSchema';
import { BookingItemAddOnCreateWithoutAddOnInputSchema } from './BookingItemAddOnCreateWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema';

export const BookingItemAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema: z.ZodType<Prisma.BookingItemAddOnUpsertWithWhereUniqueWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingItemAddOnUpdateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUncheckedUpdateWithoutAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema) ]),
}).strict();

export default BookingItemAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema;
