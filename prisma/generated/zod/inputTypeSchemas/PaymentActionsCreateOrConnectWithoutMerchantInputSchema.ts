import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsCreateWithoutMerchantInputSchema } from './PaymentActionsCreateWithoutMerchantInputSchema';
import { PaymentActionsUncheckedCreateWithoutMerchantInputSchema } from './PaymentActionsUncheckedCreateWithoutMerchantInputSchema';

export const PaymentActionsCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.PaymentActionsCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default PaymentActionsCreateOrConnectWithoutMerchantInputSchema;
