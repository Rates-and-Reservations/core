import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnUpdateWithoutAddOnInputSchema } from './BookingAddOnUpdateWithoutAddOnInputSchema';
import { BookingAddOnUncheckedUpdateWithoutAddOnInputSchema } from './BookingAddOnUncheckedUpdateWithoutAddOnInputSchema';

export const BookingAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema: z.ZodType<Prisma.BookingAddOnUpdateWithWhereUniqueWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingAddOnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingAddOnUpdateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUncheckedUpdateWithoutAddOnInputSchema) ]),
}).strict();

export default BookingAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema;
