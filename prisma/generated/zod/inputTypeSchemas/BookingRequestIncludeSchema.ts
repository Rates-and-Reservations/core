import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { BookingTemplateArgsSchema } from "../outputTypeSchemas/BookingTemplateArgsSchema"
import { BookingRequestFlowFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFlowFindManyArgsSchema"
import { BookingRequestActionValueFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestActionValueFindManyArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { BookingRequestCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingRequestCountOutputTypeArgsSchema"

export const BookingRequestIncludeSchema: z.ZodType<Prisma.BookingRequestInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => BookingTemplateArgsSchema)]).optional(),
  BookingRequestFlow: z.union([z.boolean(),z.lazy(() => BookingRequestFlowFindManyArgsSchema)]).optional(),
  BookingRequestActionValue: z.union([z.boolean(),z.lazy(() => BookingRequestActionValueFindManyArgsSchema)]).optional(),
  Booking: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BookingRequestIncludeSchema;
