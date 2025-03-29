import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnUpdateWithoutAddOnInputSchema } from './RateAddOnUpdateWithoutAddOnInputSchema';
import { RateAddOnUncheckedUpdateWithoutAddOnInputSchema } from './RateAddOnUncheckedUpdateWithoutAddOnInputSchema';

export const RateAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema: z.ZodType<Prisma.RateAddOnUpdateWithWhereUniqueWithoutAddOnInput> = z.object({
  where: z.lazy(() => RateAddOnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RateAddOnUpdateWithoutAddOnInputSchema),z.lazy(() => RateAddOnUncheckedUpdateWithoutAddOnInputSchema) ]),
}).strict();

export default RateAddOnUpdateWithWhereUniqueWithoutAddOnInputSchema;
