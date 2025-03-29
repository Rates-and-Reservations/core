import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutMerchantContactInputSchema } from './MerchantUpdateWithoutMerchantContactInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantContactInputSchema } from './MerchantUncheckedUpdateWithoutMerchantContactInputSchema';

export const MerchantUpdateToOneWithWhereWithoutMerchantContactInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutMerchantContactInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutMerchantContactInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantContactInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutMerchantContactInputSchema;
