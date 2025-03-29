import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnUpdateWithoutAddOnInputSchema } from './BookingAddOnUpdateWithoutAddOnInputSchema';
import { BookingAddOnUncheckedUpdateWithoutAddOnInputSchema } from './BookingAddOnUncheckedUpdateWithoutAddOnInputSchema';
import { BookingAddOnCreateWithoutAddOnInputSchema } from './BookingAddOnCreateWithoutAddOnInputSchema';
import { BookingAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingAddOnUncheckedCreateWithoutAddOnInputSchema';

export const BookingAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema: z.ZodType<Prisma.BookingAddOnUpsertWithWhereUniqueWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingAddOnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingAddOnUpdateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUncheckedUpdateWithoutAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutAddOnInputSchema) ]),
}).strict();

export default BookingAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema;
