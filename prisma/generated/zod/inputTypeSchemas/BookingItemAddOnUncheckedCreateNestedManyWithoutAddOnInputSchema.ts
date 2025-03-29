import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnCreateWithoutAddOnInputSchema } from './BookingItemAddOnCreateWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema';
import { BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema } from './BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema';
import { BookingItemAddOnCreateManyAddOnInputEnvelopeSchema } from './BookingItemAddOnCreateManyAddOnInputEnvelopeSchema';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';

export const BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema: z.ZodType<Prisma.BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnCreateWithoutAddOnInputSchema).array(),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemAddOnCreateManyAddOnInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingItemAddOnUncheckedCreateNestedManyWithoutAddOnInputSchema;
