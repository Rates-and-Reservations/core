import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnCreateWithoutAddOnInputSchema } from './BookingAddOnCreateWithoutAddOnInputSchema';
import { BookingAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingAddOnUncheckedCreateWithoutAddOnInputSchema';

export const BookingAddOnCreateOrConnectWithoutAddOnInputSchema: z.ZodType<Prisma.BookingAddOnCreateOrConnectWithoutAddOnInput> = z.object({
  where: z.lazy(() => BookingAddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutAddOnInputSchema) ]),
}).strict();

export default BookingAddOnCreateOrConnectWithoutAddOnInputSchema;
