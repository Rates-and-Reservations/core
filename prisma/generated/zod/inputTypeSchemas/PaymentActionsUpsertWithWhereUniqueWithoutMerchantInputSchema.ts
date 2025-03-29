import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateWithoutMerchantInputSchema } from './PaymentActionsUpdateWithoutMerchantInputSchema';
import { PaymentActionsUncheckedUpdateWithoutMerchantInputSchema } from './PaymentActionsUncheckedUpdateWithoutMerchantInputSchema';
import { PaymentActionsCreateWithoutMerchantInputSchema } from './PaymentActionsCreateWithoutMerchantInputSchema';
import { PaymentActionsUncheckedCreateWithoutMerchantInputSchema } from './PaymentActionsUncheckedCreateWithoutMerchantInputSchema';

export const PaymentActionsUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.PaymentActionsUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentActionsUpdateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default PaymentActionsUpsertWithWhereUniqueWithoutMerchantInputSchema;
