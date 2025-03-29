import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateIncludeSchema } from '../inputTypeSchemas/BookingTemplateIncludeSchema'
import { BookingTemplateWhereInputSchema } from '../inputTypeSchemas/BookingTemplateWhereInputSchema'
import { BookingTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingTemplateOrderByWithRelationInputSchema'
import { BookingTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/BookingTemplateWhereUniqueInputSchema'
import { BookingTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/BookingTemplateScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingActionFindManyArgsSchema } from "../outputTypeSchemas/BookingActionFindManyArgsSchema"
import { BookingRequestFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFindManyArgsSchema"
import { BookingTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const BookingTemplateFindFirstArgsSchema: z.ZodType<Prisma.BookingTemplateFindFirstArgs> = z.object({
  select: BookingTemplateSelectSchema.optional(),
  include: z.lazy(() => BookingTemplateIncludeSchema).optional(),
  where: BookingTemplateWhereInputSchema.optional(),
  orderBy: z.union([ BookingTemplateOrderByWithRelationInputSchema.array(),BookingTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingTemplateScalarFieldEnumSchema,BookingTemplateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BookingTemplateFindFirstArgsSchema;
