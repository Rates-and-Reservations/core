import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnCreateWithoutRateInputSchema } from './RateAddOnCreateWithoutRateInputSchema';
import { RateAddOnUncheckedCreateWithoutRateInputSchema } from './RateAddOnUncheckedCreateWithoutRateInputSchema';
import { RateAddOnCreateOrConnectWithoutRateInputSchema } from './RateAddOnCreateOrConnectWithoutRateInputSchema';
import { RateAddOnUpsertWithWhereUniqueWithoutRateInputSchema } from './RateAddOnUpsertWithWhereUniqueWithoutRateInputSchema';
import { RateAddOnCreateManyRateInputEnvelopeSchema } from './RateAddOnCreateManyRateInputEnvelopeSchema';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnUpdateWithWhereUniqueWithoutRateInputSchema } from './RateAddOnUpdateWithWhereUniqueWithoutRateInputSchema';
import { RateAddOnUpdateManyWithWhereWithoutRateInputSchema } from './RateAddOnUpdateManyWithWhereWithoutRateInputSchema';
import { RateAddOnScalarWhereInputSchema } from './RateAddOnScalarWhereInputSchema';

export const RateAddOnUpdateManyWithoutRateNestedInputSchema: z.ZodType<Prisma.RateAddOnUpdateManyWithoutRateNestedInput> = z.object({
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutRateInputSchema),z.lazy(() => RateAddOnCreateWithoutRateInputSchema).array(),z.lazy(() => RateAddOnUncheckedCreateWithoutRateInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutRateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateAddOnCreateOrConnectWithoutRateInputSchema),z.lazy(() => RateAddOnCreateOrConnectWithoutRateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RateAddOnUpsertWithWhereUniqueWithoutRateInputSchema),z.lazy(() => RateAddOnUpsertWithWhereUniqueWithoutRateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateAddOnCreateManyRateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RateAddOnUpdateWithWhereUniqueWithoutRateInputSchema),z.lazy(() => RateAddOnUpdateWithWhereUniqueWithoutRateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RateAddOnUpdateManyWithWhereWithoutRateInputSchema),z.lazy(() => RateAddOnUpdateManyWithWhereWithoutRateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RateAddOnScalarWhereInputSchema),z.lazy(() => RateAddOnScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RateAddOnUpdateManyWithoutRateNestedInputSchema;
