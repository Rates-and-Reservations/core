import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutApiUsageLogInputSchema } from './MerchantCreateWithoutApiUsageLogInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageLogInputSchema } from './MerchantUncheckedCreateWithoutApiUsageLogInputSchema';
import { MerchantCreateOrConnectWithoutApiUsageLogInputSchema } from './MerchantCreateOrConnectWithoutApiUsageLogInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutApiUsageLogInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutApiUsageLogInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutApiUsageLogInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutApiUsageLogInputSchema;
