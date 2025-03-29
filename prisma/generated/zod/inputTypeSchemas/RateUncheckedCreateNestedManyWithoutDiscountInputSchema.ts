import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutDiscountInputSchema } from './RateCreateWithoutDiscountInputSchema';
import { RateUncheckedCreateWithoutDiscountInputSchema } from './RateUncheckedCreateWithoutDiscountInputSchema';
import { RateCreateOrConnectWithoutDiscountInputSchema } from './RateCreateOrConnectWithoutDiscountInputSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';

export const RateUncheckedCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.RateUncheckedCreateNestedManyWithoutDiscountInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutDiscountInputSchema),z.lazy(() => RateCreateWithoutDiscountInputSchema).array(),z.lazy(() => RateUncheckedCreateWithoutDiscountInputSchema),z.lazy(() => RateUncheckedCreateWithoutDiscountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateCreateOrConnectWithoutDiscountInputSchema),z.lazy(() => RateCreateOrConnectWithoutDiscountInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RateUncheckedCreateNestedManyWithoutDiscountInputSchema;
