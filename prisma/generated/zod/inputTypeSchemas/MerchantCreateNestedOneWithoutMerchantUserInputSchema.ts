import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutMerchantUserInputSchema } from './MerchantCreateWithoutMerchantUserInputSchema';
import { MerchantUncheckedCreateWithoutMerchantUserInputSchema } from './MerchantUncheckedCreateWithoutMerchantUserInputSchema';
import { MerchantCreateOrConnectWithoutMerchantUserInputSchema } from './MerchantCreateOrConnectWithoutMerchantUserInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutMerchantUserInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutMerchantUserInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantUserInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutMerchantUserInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutMerchantUserInputSchema;
