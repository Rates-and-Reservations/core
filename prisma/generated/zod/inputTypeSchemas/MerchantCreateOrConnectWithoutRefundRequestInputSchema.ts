import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutRefundRequestInputSchema } from './MerchantCreateWithoutRefundRequestInputSchema';
import { MerchantUncheckedCreateWithoutRefundRequestInputSchema } from './MerchantUncheckedCreateWithoutRefundRequestInputSchema';

export const MerchantCreateOrConnectWithoutRefundRequestInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutRefundRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRefundRequestInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutRefundRequestInputSchema;
