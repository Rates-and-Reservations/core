import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnCreateWithoutAddOnInputSchema } from './BookingAddOnCreateWithoutAddOnInputSchema';
import { BookingAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingAddOnUncheckedCreateWithoutAddOnInputSchema';
import { BookingAddOnCreateOrConnectWithoutAddOnInputSchema } from './BookingAddOnCreateOrConnectWithoutAddOnInputSchema';
import { BookingAddOnCreateManyAddOnInputEnvelopeSchema } from './BookingAddOnCreateManyAddOnInputEnvelopeSchema';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';

export const BookingAddOnCreateNestedManyWithoutAddOnInputSchema: z.ZodType<Prisma.BookingAddOnCreateNestedManyWithoutAddOnInput> = z.object({
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnCreateWithoutAddOnInputSchema).array(),z.lazy(() => BookingAddOnUncheckedCreateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutAddOnInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingAddOnCreateOrConnectWithoutAddOnInputSchema),z.lazy(() => BookingAddOnCreateOrConnectWithoutAddOnInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingAddOnCreateManyAddOnInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingAddOnCreateNestedManyWithoutAddOnInputSchema;
