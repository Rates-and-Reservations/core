import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutMerchantContactInputSchema } from './MerchantCreateWithoutMerchantContactInputSchema';
import { MerchantUncheckedCreateWithoutMerchantContactInputSchema } from './MerchantUncheckedCreateWithoutMerchantContactInputSchema';
import { MerchantCreateOrConnectWithoutMerchantContactInputSchema } from './MerchantCreateOrConnectWithoutMerchantContactInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutMerchantContactInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutMerchantContactInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantContactInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantContactInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutMerchantContactInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutMerchantContactInputSchema;
