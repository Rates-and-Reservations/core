import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutRefundRequestInputSchema } from './MerchantUpdateWithoutRefundRequestInputSchema';
import { MerchantUncheckedUpdateWithoutRefundRequestInputSchema } from './MerchantUncheckedUpdateWithoutRefundRequestInputSchema';

export const MerchantUpdateToOneWithWhereWithoutRefundRequestInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutRefundRequestInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutRefundRequestInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutRefundRequestInputSchema;
