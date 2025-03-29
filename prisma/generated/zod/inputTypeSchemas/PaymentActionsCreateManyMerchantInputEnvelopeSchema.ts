import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateManyMerchantInputSchema } from './PaymentActionsCreateManyMerchantInputSchema';

export const PaymentActionsCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.PaymentActionsCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentActionsCreateManyMerchantInputSchema),z.lazy(() => PaymentActionsCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PaymentActionsCreateManyMerchantInputEnvelopeSchema;
