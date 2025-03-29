import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithoutResourceInputSchema } from './RateUpdateWithoutResourceInputSchema';
import { RateUncheckedUpdateWithoutResourceInputSchema } from './RateUncheckedUpdateWithoutResourceInputSchema';

export const RateUpdateWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.RateUpdateWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RateUpdateWithoutResourceInputSchema),z.lazy(() => RateUncheckedUpdateWithoutResourceInputSchema) ]),
}).strict();

export default RateUpdateWithWhereUniqueWithoutResourceInputSchema;
