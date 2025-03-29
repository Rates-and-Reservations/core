import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutDiscountInputSchema } from './MerchantUpdateWithoutDiscountInputSchema';
import { MerchantUncheckedUpdateWithoutDiscountInputSchema } from './MerchantUncheckedUpdateWithoutDiscountInputSchema';

export const MerchantUpdateToOneWithWhereWithoutDiscountInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutDiscountInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutDiscountInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutDiscountInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutDiscountInputSchema;
