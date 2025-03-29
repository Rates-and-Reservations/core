import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithoutResourceInputSchema } from './RateUpdateWithoutResourceInputSchema';
import { RateUncheckedUpdateWithoutResourceInputSchema } from './RateUncheckedUpdateWithoutResourceInputSchema';
import { RateCreateWithoutResourceInputSchema } from './RateCreateWithoutResourceInputSchema';
import { RateUncheckedCreateWithoutResourceInputSchema } from './RateUncheckedCreateWithoutResourceInputSchema';

export const RateUpsertWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.RateUpsertWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RateUpdateWithoutResourceInputSchema),z.lazy(() => RateUncheckedUpdateWithoutResourceInputSchema) ]),
  create: z.union([ z.lazy(() => RateCreateWithoutResourceInputSchema),z.lazy(() => RateUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default RateUpsertWithWhereUniqueWithoutResourceInputSchema;
