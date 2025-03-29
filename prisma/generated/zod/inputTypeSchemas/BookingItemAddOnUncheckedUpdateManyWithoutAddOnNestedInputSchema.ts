import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemAddOnCreateWithoutAddOnInputSchema } from './BookingItemAddOnCreateWithoutAddOnInputSchema';
import { BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema';
import { BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema } from './BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema';
import { BookingItemAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema } from './BookingItemAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema';
import { BookingItemAddOnCreateManyAddOnInputEnvelopeSchema } from './BookingItemAddOnCreateManyAddOnInputEnvelopeSchema';
import { BookingItemAddOnWhereUniqueInputSchema } from './BookingItemAddOnWhereUniqueInputSchema';
import { BookingItemAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema } from './BookingItemAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema';
import { BookingItemAddOnUpdateManyWithWhereWithoutAddOnInputSchema } from './BookingItemAddOnUpdateManyWithWhereWithoutAddOnInputSchema';
import { BookingItemAddOnScalarWhereInputSchema } from './BookingItemAddOnScalarWhereInputSchema';

export const BookingItemAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema: z.ZodType<Prisma.BookingItemAddOnUncheckedUpdateManyWithoutAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnCreateWithoutAddOnInputSchema).array(),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUncheckedCreateWithoutAddOnInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnCreateOrConnectWithoutAddOnInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingItemAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingItemAddOnCreateManyAddOnInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingItemAddOnWhereUniqueInputSchema),z.lazy(() => BookingItemAddOnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingItemAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingItemAddOnUpdateManyWithWhereWithoutAddOnInputSchema),z.lazy(() => BookingItemAddOnUpdateManyWithWhereWithoutAddOnInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingItemAddOnScalarWhereInputSchema),z.lazy(() => BookingItemAddOnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingItemAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema;
