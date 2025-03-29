import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsScalarWhereInputSchema } from './PaymentActionsScalarWhereInputSchema';
import { PaymentActionsUpdateManyMutationInputSchema } from './PaymentActionsUpdateManyMutationInputSchema';
import { PaymentActionsUncheckedUpdateManyWithoutMerchantInputSchema } from './PaymentActionsUncheckedUpdateManyWithoutMerchantInputSchema';

export const PaymentActionsUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.PaymentActionsUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => PaymentActionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentActionsUpdateManyMutationInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default PaymentActionsUpdateManyWithWhereWithoutMerchantInputSchema;
