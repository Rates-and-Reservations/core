import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnCreateWithoutRateInputSchema } from './RateAddOnCreateWithoutRateInputSchema';
import { RateAddOnUncheckedCreateWithoutRateInputSchema } from './RateAddOnUncheckedCreateWithoutRateInputSchema';
import { RateAddOnCreateOrConnectWithoutRateInputSchema } from './RateAddOnCreateOrConnectWithoutRateInputSchema';
import { RateAddOnCreateManyRateInputEnvelopeSchema } from './RateAddOnCreateManyRateInputEnvelopeSchema';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';

export const RateAddOnCreateNestedManyWithoutRateInputSchema: z.ZodType<Prisma.RateAddOnCreateNestedManyWithoutRateInput> = z.object({
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutRateInputSchema),z.lazy(() => RateAddOnCreateWithoutRateInputSchema).array(),z.lazy(() => RateAddOnUncheckedCreateWithoutRateInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutRateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RateAddOnCreateOrConnectWithoutRateInputSchema),z.lazy(() => RateAddOnCreateOrConnectWithoutRateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RateAddOnCreateManyRateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RateAddOnWhereUniqueInputSchema),z.lazy(() => RateAddOnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RateAddOnCreateNestedManyWithoutRateInputSchema;
