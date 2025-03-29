import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutDiscountInputSchema } from './MerchantUpdateWithoutDiscountInputSchema';
import { MerchantUncheckedUpdateWithoutDiscountInputSchema } from './MerchantUncheckedUpdateWithoutDiscountInputSchema';
import { MerchantCreateWithoutDiscountInputSchema } from './MerchantCreateWithoutDiscountInputSchema';
import { MerchantUncheckedCreateWithoutDiscountInputSchema } from './MerchantUncheckedCreateWithoutDiscountInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutDiscountInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutDiscountInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutDiscountInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutDiscountInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutDiscountInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutDiscountInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutDiscountInputSchema;
