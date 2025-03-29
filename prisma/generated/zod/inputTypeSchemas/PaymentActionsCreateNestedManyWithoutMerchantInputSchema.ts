import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutMerchantInputSchema } from './PaymentActionsCreateWithoutMerchantInputSchema';
import { PaymentActionsUncheckedCreateWithoutMerchantInputSchema } from './PaymentActionsUncheckedCreateWithoutMerchantInputSchema';
import { PaymentActionsCreateOrConnectWithoutMerchantInputSchema } from './PaymentActionsCreateOrConnectWithoutMerchantInputSchema';
import { PaymentActionsCreateManyMerchantInputEnvelopeSchema } from './PaymentActionsCreateManyMerchantInputEnvelopeSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';

export const PaymentActionsCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.PaymentActionsCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsCreateWithoutMerchantInputSchema).array(),z.lazy(() => PaymentActionsUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentActionsCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => PaymentActionsCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentActionsCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PaymentActionsCreateNestedManyWithoutMerchantInputSchema;
