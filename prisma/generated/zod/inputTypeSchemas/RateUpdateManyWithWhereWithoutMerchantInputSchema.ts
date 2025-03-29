import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateScalarWhereInputSchema } from './RateScalarWhereInputSchema';
import { RateUpdateManyMutationInputSchema } from './RateUpdateManyMutationInputSchema';
import { RateUncheckedUpdateManyWithoutMerchantInputSchema } from './RateUncheckedUpdateManyWithoutMerchantInputSchema';

export const RateUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.RateUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => RateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RateUpdateManyMutationInputSchema),z.lazy(() => RateUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default RateUpdateManyWithWhereWithoutMerchantInputSchema;
