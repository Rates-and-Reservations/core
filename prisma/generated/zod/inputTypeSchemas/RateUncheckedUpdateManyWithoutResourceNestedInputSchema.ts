import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutResourceInputSchema } from './RateCreateWithoutResourceInputSchema';
import { RateUncheckedCreateWithoutResourceInputSchema } from './RateUncheckedCreateWithoutResourceInputSchema';
import { RateCreateOrConnectWithoutResourceInputSchema } from './RateCreateOrConnectWithoutResourceInputSchema';
import { RateUpsertWithWhereUniqueWithoutResourceInputSchema } from './RateUpsertWithWhereUniqueWithoutResourceInputSchema';
import { RateCreateManyResourceInputEnvelopeSchema } from './RateCreateManyResourceInputEnvelopeSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithWhereUniqueWithoutResourceInputSchema } from './RateUpdateWithWhereUniqueWithoutResourceInputSchema';
import { RateUpdateManyWithWhereWithoutResourceInputSchema } from './RateUpdateManyWithWhereWithoutResourceInputSchema';
import { RateScalarWhereInputSchema } from './RateScalarWhereInputSchema';

export const RateUncheckedUpdateManyWithoutResourceNestedInputSchema: z.ZodType<Prisma.RateUncheckedUpdateManyWithoutResourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutResourceInputSchema),z.lazy(() => RateCreateWithoutResourceInputSchema).array(),z.lazy(() => RateUncheckedCreateWithoutResourceInputSchema),z.lazy(() => RateUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateCreateOrConnectWithoutResourceInputSchema),z.lazy(() => RateCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RateUpsertWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => RateUpsertWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateCreateManyResourceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RateUpdateWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => RateUpdateWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RateUpdateManyWithWhereWithoutResourceInputSchema),z.lazy(() => RateUpdateManyWithWhereWithoutResourceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RateScalarWhereInputSchema),z.lazy(() => RateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RateUncheckedUpdateManyWithoutResourceNestedInputSchema;
