import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutDiscountInputSchema } from './MerchantCreateWithoutDiscountInputSchema';
import { MerchantUncheckedCreateWithoutDiscountInputSchema } from './MerchantUncheckedCreateWithoutDiscountInputSchema';

export const MerchantCreateOrConnectWithoutDiscountInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutDiscountInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutDiscountInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutDiscountInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutDiscountInputSchema;
