import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantContactWhereUniqueInputSchema } from './MerchantContactWhereUniqueInputSchema';
import { MerchantContactCreateWithoutMerchantInputSchema } from './MerchantContactCreateWithoutMerchantInputSchema';
import { MerchantContactUncheckedCreateWithoutMerchantInputSchema } from './MerchantContactUncheckedCreateWithoutMerchantInputSchema';

export const MerchantContactCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantContactCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => MerchantContactWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantContactCreateWithoutMerchantInputSchema),z.lazy(() => MerchantContactUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default MerchantContactCreateOrConnectWithoutMerchantInputSchema;
