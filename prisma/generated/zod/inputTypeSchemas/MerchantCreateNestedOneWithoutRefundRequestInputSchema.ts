import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutRefundRequestInputSchema } from './MerchantCreateWithoutRefundRequestInputSchema';
import { MerchantUncheckedCreateWithoutRefundRequestInputSchema } from './MerchantUncheckedCreateWithoutRefundRequestInputSchema';
import { MerchantCreateOrConnectWithoutRefundRequestInputSchema } from './MerchantCreateOrConnectWithoutRefundRequestInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutRefundRequestInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutRefundRequestInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutRefundRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRefundRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutRefundRequestInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutRefundRequestInputSchema;
