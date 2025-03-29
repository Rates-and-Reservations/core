import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PaymentActionsCountOutputTypeSelectSchema: z.ZodType<Prisma.PaymentActionsCountOutputTypeSelect> = z.object({
  RefundRequest: z.boolean().optional(),
  RefundLog: z.boolean().optional(),
  InvoicePayment: z.boolean().optional(),
}).strict();

export default PaymentActionsCountOutputTypeSelectSchema;
