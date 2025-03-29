import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoicePaymentSelectSchema } from '../inputTypeSchemas/InvoicePaymentSelectSchema';
import { InvoicePaymentIncludeSchema } from '../inputTypeSchemas/InvoicePaymentIncludeSchema';

export const InvoicePaymentArgsSchema: z.ZodType<Prisma.InvoicePaymentDefaultArgs> = z.object({
  select: z.lazy(() => InvoicePaymentSelectSchema).optional(),
  include: z.lazy(() => InvoicePaymentIncludeSchema).optional(),
}).strict();

export default InvoicePaymentArgsSchema;
