import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnCreateWithoutAddOnInputSchema } from './BookingAddOnCreateWithoutAddOnInputSchema';
import { BookingAddOnUncheckedCreateWithoutAddOnInputSchema } from './BookingAddOnUncheckedCreateWithoutAddOnInputSchema';
import { BookingAddOnCreateOrConnectWithoutAddOnInputSchema } from './BookingAddOnCreateOrConnectWithoutAddOnInputSchema';
import { BookingAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema } from './BookingAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema';
import { BookingAddOnCreateManyAddOnInputEnvelopeSchema } from './BookingAddOnCreateManyAddOnInputEnvelopeSchema';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema } from './BookingAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema';
import { BookingAddOnUpdateManyWithWhereWithoutAddOnInputSchema } from './BookingAddOnUpdateManyWithWhereWithoutAddOnInputSchema';
import { BookingAddOnScalarWhereInputSchema } from './BookingAddOnScalarWhereInputSchema';

export const BookingAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema: z.ZodType<Prisma.BookingAddOnUncheckedUpdateManyWithoutAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnCreateWithoutAddOnInputSchema).array(),z.lazy(() => BookingAddOnUncheckedCreateWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutAddOnInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingAddOnCreateOrConnectWithoutAddOnInputSchema),z.lazy(() => BookingAddOnCreateOrConnectWithoutAddOnInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingAddOnCreateManyAddOnInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingAddOnWhereUniqueInputSchema),z.lazy(() => BookingAddOnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingAddOnUpdateManyWithWhereWithoutAddOnInputSchema),z.lazy(() => BookingAddOnUpdateManyWithWhereWithoutAddOnInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingAddOnScalarWhereInputSchema),z.lazy(() => BookingAddOnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema;
