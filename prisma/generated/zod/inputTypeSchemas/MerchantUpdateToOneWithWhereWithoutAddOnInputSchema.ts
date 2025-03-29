import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutAddOnInputSchema } from './MerchantUpdateWithoutAddOnInputSchema';
import { MerchantUncheckedUpdateWithoutAddOnInputSchema } from './MerchantUncheckedUpdateWithoutAddOnInputSchema';

export const MerchantUpdateToOneWithWhereWithoutAddOnInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutAddOnInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutAddOnInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAddOnInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutAddOnInputSchema;
