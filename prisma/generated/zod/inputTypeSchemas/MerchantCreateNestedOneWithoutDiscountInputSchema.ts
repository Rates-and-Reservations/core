import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutDiscountInputSchema } from './MerchantCreateWithoutDiscountInputSchema';
import { MerchantUncheckedCreateWithoutDiscountInputSchema } from './MerchantUncheckedCreateWithoutDiscountInputSchema';
import { MerchantCreateOrConnectWithoutDiscountInputSchema } from './MerchantCreateOrConnectWithoutDiscountInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutDiscountInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutDiscountInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutDiscountInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutDiscountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutDiscountInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutDiscountInputSchema;
