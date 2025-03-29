import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnUpdateWithoutAddOnInputSchema } from './RateAddOnUpdateWithoutAddOnInputSchema';
import { RateAddOnUncheckedUpdateWithoutAddOnInputSchema } from './RateAddOnUncheckedUpdateWithoutAddOnInputSchema';
import { RateAddOnCreateWithoutAddOnInputSchema } from './RateAddOnCreateWithoutAddOnInputSchema';
import { RateAddOnUncheckedCreateWithoutAddOnInputSchema } from './RateAddOnUncheckedCreateWithoutAddOnInputSchema';

export const RateAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema: z.ZodType<Prisma.RateAddOnUpsertWithWhereUniqueWithoutAddOnInput> = z.object({
  where: z.lazy(() => RateAddOnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RateAddOnUpdateWithoutAddOnInputSchema),z.lazy(() => RateAddOnUncheckedUpdateWithoutAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutAddOnInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutAddOnInputSchema) ]),
}).strict();

export default RateAddOnUpsertWithWhereUniqueWithoutAddOnInputSchema;
