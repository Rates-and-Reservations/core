import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithoutDiscountInputSchema } from './RateUpdateWithoutDiscountInputSchema';
import { RateUncheckedUpdateWithoutDiscountInputSchema } from './RateUncheckedUpdateWithoutDiscountInputSchema';
import { RateCreateWithoutDiscountInputSchema } from './RateCreateWithoutDiscountInputSchema';
import { RateUncheckedCreateWithoutDiscountInputSchema } from './RateUncheckedCreateWithoutDiscountInputSchema';

export const RateUpsertWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.RateUpsertWithWhereUniqueWithoutDiscountInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RateUpdateWithoutDiscountInputSchema),z.lazy(() => RateUncheckedUpdateWithoutDiscountInputSchema) ]),
  create: z.union([ z.lazy(() => RateCreateWithoutDiscountInputSchema),z.lazy(() => RateUncheckedCreateWithoutDiscountInputSchema) ]),
}).strict();

export default RateUpsertWithWhereUniqueWithoutDiscountInputSchema;
