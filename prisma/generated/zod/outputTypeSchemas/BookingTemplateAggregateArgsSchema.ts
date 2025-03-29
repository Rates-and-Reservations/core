import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateWhereInputSchema } from '../inputTypeSchemas/BookingTemplateWhereInputSchema'
import { BookingTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingTemplateOrderByWithRelationInputSchema'
import { BookingTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/BookingTemplateWhereUniqueInputSchema'

export const BookingTemplateAggregateArgsSchema: z.ZodType<Prisma.BookingTemplateAggregateArgs> = z.object({
  where: BookingTemplateWhereInputSchema.optional(),
  orderBy: z.union([ BookingTemplateOrderByWithRelationInputSchema.array(),BookingTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingTemplateAggregateArgsSchema;
