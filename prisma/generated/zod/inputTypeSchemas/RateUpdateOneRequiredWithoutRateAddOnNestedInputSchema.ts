import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutRateAddOnInputSchema } from './RateCreateWithoutRateAddOnInputSchema';
import { RateUncheckedCreateWithoutRateAddOnInputSchema } from './RateUncheckedCreateWithoutRateAddOnInputSchema';
import { RateCreateOrConnectWithoutRateAddOnInputSchema } from './RateCreateOrConnectWithoutRateAddOnInputSchema';
import { RateUpsertWithoutRateAddOnInputSchema } from './RateUpsertWithoutRateAddOnInputSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateToOneWithWhereWithoutRateAddOnInputSchema } from './RateUpdateToOneWithWhereWithoutRateAddOnInputSchema';
import { RateUpdateWithoutRateAddOnInputSchema } from './RateUpdateWithoutRateAddOnInputSchema';
import { RateUncheckedUpdateWithoutRateAddOnInputSchema } from './RateUncheckedUpdateWithoutRateAddOnInputSchema';

export const RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema: z.ZodType<Prisma.RateUpdateOneRequiredWithoutRateAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutRateAddOnInputSchema),z.lazy(() => RateUncheckedCreateWithoutRateAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RateCreateOrConnectWithoutRateAddOnInputSchema).optional(),
  upsert: z.lazy(() => RateUpsertWithoutRateAddOnInputSchema).optional(),
  connect: z.lazy(() => RateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RateUpdateToOneWithWhereWithoutRateAddOnInputSchema),z.lazy(() => RateUpdateWithoutRateAddOnInputSchema),z.lazy(() => RateUncheckedUpdateWithoutRateAddOnInputSchema) ]).optional(),
}).strict();

export default RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema;
