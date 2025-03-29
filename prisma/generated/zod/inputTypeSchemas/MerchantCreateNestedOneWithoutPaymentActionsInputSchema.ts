import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutPaymentActionsInputSchema } from './MerchantCreateWithoutPaymentActionsInputSchema';
import { MerchantUncheckedCreateWithoutPaymentActionsInputSchema } from './MerchantUncheckedCreateWithoutPaymentActionsInputSchema';
import { MerchantCreateOrConnectWithoutPaymentActionsInputSchema } from './MerchantCreateOrConnectWithoutPaymentActionsInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutPaymentActionsInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutPaymentActionsInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutPaymentActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutPaymentActionsInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutPaymentActionsInputSchema;
