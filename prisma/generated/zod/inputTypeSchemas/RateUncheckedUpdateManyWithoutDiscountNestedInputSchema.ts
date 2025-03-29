import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutDiscountInputSchema } from './RateCreateWithoutDiscountInputSchema';
import { RateUncheckedCreateWithoutDiscountInputSchema } from './RateUncheckedCreateWithoutDiscountInputSchema';
import { RateCreateOrConnectWithoutDiscountInputSchema } from './RateCreateOrConnectWithoutDiscountInputSchema';
import { RateUpsertWithWhereUniqueWithoutDiscountInputSchema } from './RateUpsertWithWhereUniqueWithoutDiscountInputSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithWhereUniqueWithoutDiscountInputSchema } from './RateUpdateWithWhereUniqueWithoutDiscountInputSchema';
import { RateUpdateManyWithWhereWithoutDiscountInputSchema } from './RateUpdateManyWithWhereWithoutDiscountInputSchema';
import { RateScalarWhereInputSchema } from './RateScalarWhereInputSchema';

export const RateUncheckedUpdateManyWithoutDiscountNestedInputSchema: z.ZodType<Prisma.RateUncheckedUpdateManyWithoutDiscountNestedInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutDiscountInputSchema),z.lazy(() => RateCreateWithoutDiscountInputSchema).array(),z.lazy(() => RateUncheckedCreateWithoutDiscountInputSchema),z.lazy(() => RateUncheckedCreateWithoutDiscountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateCreateOrConnectWithoutDiscountInputSchema),z.lazy(() => RateCreateOrConnectWithoutDiscountInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RateUpsertWithWhereUniqueWithoutDiscountInputSchema),z.lazy(() => RateUpsertWithWhereUniqueWithoutDiscountInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RateUpdateWithWhereUniqueWithoutDiscountInputSchema),z.lazy(() => RateUpdateWithWhereUniqueWithoutDiscountInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RateUpdateManyWithWhereWithoutDiscountInputSchema),z.lazy(() => RateUpdateManyWithWhereWithoutDiscountInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RateScalarWhereInputSchema),z.lazy(() => RateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RateUncheckedUpdateManyWithoutDiscountNestedInputSchema;
