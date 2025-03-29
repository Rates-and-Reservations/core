import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnCreateWithoutAddOnInputSchema } from './RateAddOnCreateWithoutAddOnInputSchema';
import { RateAddOnUncheckedCreateWithoutAddOnInputSchema } from './RateAddOnUncheckedCreateWithoutAddOnInputSchema';
import { RateAddOnCreateOrConnectWithoutAddOnInputSchema } from './RateAddOnCreateOrConnectWithoutAddOnInputSchema';
import { RateAddOnCreateManyAddOnInputEnvelopeSchema } from './RateAddOnCreateManyAddOnInputEnvelopeSchema';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';

export const RateAddOnCreateNestedManyWithoutAddOnInputSchema: z.ZodType<Prisma.RateAddOnCreateNestedManyWithoutAddOnInput> = z.object({
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutAddOnInputSchema),z.lazy(() => RateAddOnCreateWithoutAddOnInputSchema).array(),z.lazy(() => RateAddOnUncheckedCreateWithoutAddOnInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutAddOnInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateAddOnCreateOrConnectWithoutAddOnInputSchema),z.lazy(() => RateAddOnCreateOrConnectWithoutAddOnInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateAddOnCreateManyAddOnInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RateAddOnCreateNestedManyWithoutAddOnInputSchema;
