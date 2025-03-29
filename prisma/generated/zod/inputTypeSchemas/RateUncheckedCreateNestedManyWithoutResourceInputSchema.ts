import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutResourceInputSchema } from './RateCreateWithoutResourceInputSchema';
import { RateUncheckedCreateWithoutResourceInputSchema } from './RateUncheckedCreateWithoutResourceInputSchema';
import { RateCreateOrConnectWithoutResourceInputSchema } from './RateCreateOrConnectWithoutResourceInputSchema';
import { RateCreateManyResourceInputEnvelopeSchema } from './RateCreateManyResourceInputEnvelopeSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';

export const RateUncheckedCreateNestedManyWithoutResourceInputSchema: z.ZodType<Prisma.RateUncheckedCreateNestedManyWithoutResourceInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutResourceInputSchema),z.lazy(() => RateCreateWithoutResourceInputSchema).array(),z.lazy(() => RateUncheckedCreateWithoutResourceInputSchema),z.lazy(() => RateUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateCreateOrConnectWithoutResourceInputSchema),z.lazy(() => RateCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateCreateManyResourceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RateWhereUniqueInputSchema),z.lazy(() => RateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RateUncheckedCreateNestedManyWithoutResourceInputSchema;
