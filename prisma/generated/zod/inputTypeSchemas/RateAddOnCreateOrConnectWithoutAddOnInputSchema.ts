import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnCreateWithoutAddOnInputSchema } from './RateAddOnCreateWithoutAddOnInputSchema';
import { RateAddOnUncheckedCreateWithoutAddOnInputSchema } from './RateAddOnUncheckedCreateWithoutAddOnInputSchema';

export const RateAddOnCreateOrConnectWithoutAddOnInputSchema: z.ZodType<Prisma.RateAddOnCreateOrConnectWithoutAddOnInput> = z.object({
  where: z.lazy(() => RateAddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutAddOnInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutAddOnInputSchema) ]),
}).strict();

export default RateAddOnCreateOrConnectWithoutAddOnInputSchema;
