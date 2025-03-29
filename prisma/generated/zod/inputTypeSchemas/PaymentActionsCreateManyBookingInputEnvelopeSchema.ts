import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateManyBookingInputSchema } from './PaymentActionsCreateManyBookingInputSchema';

export const PaymentActionsCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.PaymentActionsCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentActionsCreateManyBookingInputSchema),z.lazy(() => PaymentActionsCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PaymentActionsCreateManyBookingInputEnvelopeSchema;
