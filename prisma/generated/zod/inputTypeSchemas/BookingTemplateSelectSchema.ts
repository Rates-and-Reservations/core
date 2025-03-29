import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingActionFindManyArgsSchema } from "../outputTypeSchemas/BookingActionFindManyArgsSchema"
import { BookingRequestFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFindManyArgsSchema"
import { BookingTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingTemplateCountOutputTypeArgsSchema"

export const BookingTemplateSelectSchema: z.ZodType<Prisma.BookingTemplateSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  selectionMode: z.boolean().optional(),
  config: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  actions: z.union([z.boolean(),z.lazy(() => BookingActionFindManyArgsSchema)]).optional(),
  BookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BookingTemplateSelectSchema;
