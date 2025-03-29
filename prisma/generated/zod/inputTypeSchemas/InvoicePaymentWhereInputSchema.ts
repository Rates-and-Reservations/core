import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { InvoiceScalarRelationFilterSchema } from './InvoiceScalarRelationFilterSchema';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';
import { PaymentActionsScalarRelationFilterSchema } from './PaymentActionsScalarRelationFilterSchema';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';

export const InvoicePaymentWhereInputSchema: z.ZodType<Prisma.InvoicePaymentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InvoicePaymentWhereInputSchema),z.lazy(() => InvoicePaymentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvoicePaymentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvoicePaymentWhereInputSchema),z.lazy(() => InvoicePaymentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  invoiceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paymentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amountPaid: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  invoice: z.union([ z.lazy(() => InvoiceScalarRelationFilterSchema),z.lazy(() => InvoiceWhereInputSchema) ]).optional(),
  payment: z.union([ z.lazy(() => PaymentActionsScalarRelationFilterSchema),z.lazy(() => PaymentActionsWhereInputSchema) ]).optional(),
}).strict();

export default InvoicePaymentWhereInputSchema;
