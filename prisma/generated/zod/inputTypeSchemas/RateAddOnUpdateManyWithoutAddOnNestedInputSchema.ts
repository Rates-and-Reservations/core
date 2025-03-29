import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnCreateWithoutAddOnInputSchema } from './RateAddOnCreateWithoutAddOnInputSchema';
import { RateAddOnUncheckedCreateWithoutAddOnInputSchema } from './RateAddOnUncheckedCreateWithoutAddOnInputSchema';
import { RateAddOnCreateOrConnectWithoutAddOnInputSchema } from './RateAddOnCreateOrConnectWithoutAddOnInputSchema';
import { RateAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema } from './RateAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema';
import { RateAddOnCreateManyAddOnInputEnvelopeSchema } from './RateAddOnCreateManyAddOnInputEnvelopeSchema';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema } from './RateAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema';
import { RateAddOnUpdateManyWithWhereWithoutAddOnInputSchema } from './RateAddOnUpdateManyWithWhereWithoutAddOnInputSchema';
import { RateAddOnScalarWhereInputSchema } from './RateAddOnScalarWhereInputSchema';

export const RateAddOnUpdateManyWithoutAddOnNestedInputSchema: z.ZodType<Prisma.RateAddOnUpdateManyWithoutAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutAddOnInputSchema),z.lazy(() => RateAddOnCreateWithoutAddOnInputSchema).array(),z.lazy(() => RateAddOnUncheckedCreateWithoutAddOnInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutAddOnInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateAddOnCreateOrConnectWithoutAddOnInputSchema),z.lazy(() => RateAddOnCreateOrConnectWithoutAddOnInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RateAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema),z.lazy(() => RateAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateAddOnCreateManyAddOnInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RateAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema),z.lazy(() => RateAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RateAddOnUpdateManyWithWhereWithoutAddOnInputSchema),z.lazy(() => RateAddOnUpdateManyWithWhereWithoutAddOnInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RateAddOnScalarWhereInputSchema),z.lazy(() => RateAddOnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RateAddOnUpdateManyWithoutAddOnNestedInputSchema;
