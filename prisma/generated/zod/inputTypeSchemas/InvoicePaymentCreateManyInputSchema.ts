import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const InvoicePaymentCreateManyInputSchema: z.ZodType<Prisma.InvoicePaymentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  invoiceId: z.string(),
  paymentId: z.string(),
  amountPaid: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default InvoicePaymentCreateManyInputSchema;
