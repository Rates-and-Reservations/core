import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnScalarWhereInputSchema } from './RateAddOnScalarWhereInputSchema';
import { RateAddOnUpdateManyMutationInputSchema } from './RateAddOnUpdateManyMutationInputSchema';
import { RateAddOnUncheckedUpdateManyWithoutAddOnInputSchema } from './RateAddOnUncheckedUpdateManyWithoutAddOnInputSchema';

export const RateAddOnUpdateManyWithWhereWithoutAddOnInputSchema: z.ZodType<Prisma.RateAddOnUpdateManyWithWhereWithoutAddOnInput> = z.object({
  where: z.lazy(() => RateAddOnScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RateAddOnUpdateManyMutationInputSchema),z.lazy(() => RateAddOnUncheckedUpdateManyWithoutAddOnInputSchema) ]),
}).strict();

export default RateAddOnUpdateManyWithWhereWithoutAddOnInputSchema;
