import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutAddOnInputSchema } from './MerchantCreateWithoutAddOnInputSchema';
import { MerchantUncheckedCreateWithoutAddOnInputSchema } from './MerchantUncheckedCreateWithoutAddOnInputSchema';

export const MerchantCreateOrConnectWithoutAddOnInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutAddOnInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAddOnInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAddOnInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutAddOnInputSchema;
