import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnCreateWithoutAddOnInputSchema } from './BookingItemAddOnCreateWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema';

export const BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema: z.ZodType<Prisma.BookingItemAddOnCreateOrConnectWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema) ]),
}).strict();

export default BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema;
