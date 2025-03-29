import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutPaymentActionsInputSchema } from './MerchantUpdateWithoutPaymentActionsInputSchema';
import { MerchantUncheckedUpdateWithoutPaymentActionsInputSchema } from './MerchantUncheckedUpdateWithoutPaymentActionsInputSchema';

export const MerchantUpdateToOneWithWhereWithoutPaymentActionsInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutPaymentActionsInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutPaymentActionsInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutPaymentActionsInputSchema;
