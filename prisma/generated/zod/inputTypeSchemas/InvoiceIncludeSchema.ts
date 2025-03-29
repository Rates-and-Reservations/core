import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { InvoicePaymentFindManyArgsSchema } from "../outputTypeSchemas/InvoicePaymentFindManyArgsSchema"
import { InvoiceCountOutputTypeArgsSchema } from "../outputTypeSchemas/InvoiceCountOutputTypeArgsSchema"

export const InvoiceIncludeSchema: z.ZodType<Prisma.InvoiceInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  InvoicePayment: z.union([z.boolean(),z.lazy(() => InvoicePaymentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InvoiceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default InvoiceIncludeSchema;
