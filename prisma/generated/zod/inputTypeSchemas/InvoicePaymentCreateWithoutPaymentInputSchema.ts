import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { InvoiceCreateNestedOneWithoutInvoicePaymentInputSchema } from './InvoiceCreateNestedOneWithoutInvoicePaymentInputSchema';

export const InvoicePaymentCreateWithoutPaymentInputSchema: z.ZodType<Prisma.InvoicePaymentCreateWithoutPaymentInput> = z.object({
  id: z.string().cuid().optional(),
  amountPaid: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  paidAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  invoice: z.lazy(() => InvoiceCreateNestedOneWithoutInvoicePaymentInputSchema)
}).strict();

export default InvoicePaymentCreateWithoutPaymentInputSchema;
