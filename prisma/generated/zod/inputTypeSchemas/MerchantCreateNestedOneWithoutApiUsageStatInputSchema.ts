import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutApiUsageStatInputSchema } from './MerchantCreateWithoutApiUsageStatInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageStatInputSchema } from './MerchantUncheckedCreateWithoutApiUsageStatInputSchema';
import { MerchantCreateOrConnectWithoutApiUsageStatInputSchema } from './MerchantCreateOrConnectWithoutApiUsageStatInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutApiUsageStatInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutApiUsageStatInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageStatInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutApiUsageStatInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutApiUsageStatInputSchema;
