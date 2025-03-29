import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateWhereInputSchema } from '../inputTypeSchemas/BookingTemplateWhereInputSchema'
import { BookingTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingTemplateOrderByWithAggregationInputSchema'
import { BookingTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/BookingTemplateScalarFieldEnumSchema'
import { BookingTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingTemplateScalarWhereWithAggregatesInputSchema'

export const BookingTemplateGroupByArgsSchema: z.ZodType<Prisma.BookingTemplateGroupByArgs> = z.object({
  where: BookingTemplateWhereInputSchema.optional(),
  orderBy: z.union([ BookingTemplateOrderByWithAggregationInputSchema.array(),BookingTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: BookingTemplateScalarFieldEnumSchema.array(),
  having: BookingTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingTemplateGroupByArgsSchema;
