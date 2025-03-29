import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateCreateWithoutDiscountInputSchema } from './RateCreateWithoutDiscountInputSchema';
import { RateUncheckedCreateWithoutDiscountInputSchema } from './RateUncheckedCreateWithoutDiscountInputSchema';

export const RateCreateOrConnectWithoutDiscountInputSchema: z.ZodType<Prisma.RateCreateOrConnectWithoutDiscountInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RateCreateWithoutDiscountInputSchema),z.lazy(() => RateUncheckedCreateWithoutDiscountInputSchema) ]),
}).strict();

export default RateCreateOrConnectWithoutDiscountInputSchema;
