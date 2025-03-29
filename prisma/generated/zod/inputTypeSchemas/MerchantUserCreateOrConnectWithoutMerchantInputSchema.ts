import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUserWhereUniqueInputSchema } from './MerchantUserWhereUniqueInputSchema';
import { MerchantUserCreateWithoutMerchantInputSchema } from './MerchantUserCreateWithoutMerchantInputSchema';
import { MerchantUserUncheckedCreateWithoutMerchantInputSchema } from './MerchantUserUncheckedCreateWithoutMerchantInputSchema';

export const MerchantUserCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantUserCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantUserCreateWithoutMerchantInputSchema),z.lazy(() => MerchantUserUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantUserCreateOrConnectWithoutMerchantInputSchema;
