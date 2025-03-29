import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestIncludeSchema } from '../inputTypeSchemas/BookingRequestIncludeSchema'
import { BookingRequestCreateInputSchema } from '../inputTypeSchemas/BookingRequestCreateInputSchema'
import { BookingRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/BookingRequestUncheckedCreateInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { ResourceArgsSchema } from "../outputTypeSchemas/ResourceArgsSchema"
import { BookingTemplateArgsSchema } from "../outputTypeSchemas/BookingTemplateArgsSchema"
import { BookingRequestFlowFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFlowFindManyArgsSchema"
import { BookingRequestActionValueFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestActionValueFindManyArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { BookingRequestCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingRequestCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingRequestSelectSchema: z.ZodType<Prisma.BookingRequestSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  prefilledFields: z.boolean().optional(),
  customerId: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  templateId: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  isActive: z.boolean().optional(),
  notes: z.boolean().optional(),
  status: z.boolean().optional(),
  actionStatus: z.boolean().optional(),
  finalizedSnapshot: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  resource: z.union([z.boolean(),z.lazy(() => ResourceArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => BookingTemplateArgsSchema)]).optional(),
  BookingRequestFlow: z.union([z.boolean(),z.lazy(() => BookingRequestFlowFindManyArgsSchema)]).optional(),
  BookingRequestActionValue: z.union([z.boolean(),z.lazy(() => BookingRequestActionValueFindManyArgsSchema)]).optional(),
  Booking: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BookingRequestCreateArgsSchema: z.ZodType<Prisma.BookingRequestCreateArgs> = z.object({
  select: BookingRequestSelectSchema.optional(),
  include: z.lazy(() => BookingRequestIncludeSchema).optional(),
  data: z.union([ BookingRequestCreateInputSchema,BookingRequestUncheckedCreateInputSchema ]),
}).strict() ;

export default BookingRequestCreateArgsSchema;
