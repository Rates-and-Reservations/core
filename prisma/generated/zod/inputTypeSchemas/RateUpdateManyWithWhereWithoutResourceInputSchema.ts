import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateScalarWhereInputSchema } from './RateScalarWhereInputSchema';
import { RateUpdateManyMutationInputSchema } from './RateUpdateManyMutationInputSchema';
import { RateUncheckedUpdateManyWithoutResourceInputSchema } from './RateUncheckedUpdateManyWithoutResourceInputSchema';

export const RateUpdateManyWithWhereWithoutResourceInputSchema: z.ZodType<Prisma.RateUpdateManyWithWhereWithoutResourceInput> = z.object({
  where: z.lazy(() => RateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RateUpdateManyMutationInputSchema),z.lazy(() => RateUncheckedUpdateManyWithoutResourceInputSchema) ]),
}).strict();

export default RateUpdateManyWithWhereWithoutResourceInputSchema;
