import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutRefundRequestInputSchema } from './MerchantUpdateWithoutRefundRequestInputSchema';
import { MerchantUncheckedUpdateWithoutRefundRequestInputSchema } from './MerchantUncheckedUpdateWithoutRefundRequestInputSchema';
import { MerchantCreateWithoutRefundRequestInputSchema } from './MerchantCreateWithoutRefundRequestInputSchema';
import { MerchantUncheckedCreateWithoutRefundRequestInputSchema } from './MerchantUncheckedCreateWithoutRefundRequestInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutRefundRequestInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutRefundRequestInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutRefundRequestInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutRefundRequestInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutRefundRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRefundRequestInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutRefundRequestInputSchema;
