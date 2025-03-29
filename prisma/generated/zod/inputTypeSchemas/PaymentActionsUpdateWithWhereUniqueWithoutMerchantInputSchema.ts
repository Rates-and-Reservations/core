import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateWithoutMerchantInputSchema } from './PaymentActionsUpdateWithoutMerchantInputSchema';
import { PaymentActionsUncheckedUpdateWithoutMerchantInputSchema } from './PaymentActionsUncheckedUpdateWithoutMerchantInputSchema';

export const PaymentActionsUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.PaymentActionsUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentActionsUpdateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default PaymentActionsUpdateWithWhereUniqueWithoutMerchantInputSchema;
