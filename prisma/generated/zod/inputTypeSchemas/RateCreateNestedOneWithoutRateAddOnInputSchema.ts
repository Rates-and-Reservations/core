import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutRateAddOnInputSchema } from './RateCreateWithoutRateAddOnInputSchema';
import { RateUncheckedCreateWithoutRateAddOnInputSchema } from './RateUncheckedCreateWithoutRateAddOnInputSchema';
import { RateCreateOrConnectWithoutRateAddOnInputSchema } from './RateCreateOrConnectWithoutRateAddOnInputSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';

export const RateCreateNestedOneWithoutRateAddOnInputSchema: z.ZodType<Prisma.RateCreateNestedOneWithoutRateAddOnInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutRateAddOnInputSchema),z.lazy(() => RateUncheckedCreateWithoutRateAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RateCreateOrConnectWithoutRateAddOnInputSchema).optional(),
  connect: z.lazy(() => RateWhereUniqueInputSchema).optional()
}).strict();

export default RateCreateNestedOneWithoutRateAddOnInputSchema;
