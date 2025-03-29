import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutPaymentActionsInputSchema } from './MerchantCreateWithoutPaymentActionsInputSchema';
import { MerchantUncheckedCreateWithoutPaymentActionsInputSchema } from './MerchantUncheckedCreateWithoutPaymentActionsInputSchema';

export const MerchantCreateOrConnectWithoutPaymentActionsInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutPaymentActionsInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutPaymentActionsInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutPaymentActionsInputSchema;
