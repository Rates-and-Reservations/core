import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateCreateWithoutResourceInputSchema } from './RateCreateWithoutResourceInputSchema';
import { RateUncheckedCreateWithoutResourceInputSchema } from './RateUncheckedCreateWithoutResourceInputSchema';

export const RateCreateOrConnectWithoutResourceInputSchema: z.ZodType<Prisma.RateCreateOrConnectWithoutResourceInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RateCreateWithoutResourceInputSchema),z.lazy(() => RateUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default RateCreateOrConnectWithoutResourceInputSchema;
