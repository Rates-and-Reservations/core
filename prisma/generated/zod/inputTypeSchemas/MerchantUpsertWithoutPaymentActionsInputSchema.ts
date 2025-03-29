import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutPaymentActionsInputSchema } from './MerchantUpdateWithoutPaymentActionsInputSchema';
import { MerchantUncheckedUpdateWithoutPaymentActionsInputSchema } from './MerchantUncheckedUpdateWithoutPaymentActionsInputSchema';
import { MerchantCreateWithoutPaymentActionsInputSchema } from './MerchantCreateWithoutPaymentActionsInputSchema';
import { MerchantUncheckedCreateWithoutPaymentActionsInputSchema } from './MerchantUncheckedCreateWithoutPaymentActionsInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutPaymentActionsInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutPaymentActionsInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutPaymentActionsInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutPaymentActionsInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutPaymentActionsInputSchema;
