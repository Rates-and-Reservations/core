import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionIncludeSchema } from '../inputTypeSchemas/BookingActionIncludeSchema'
import { BookingActionWhereUniqueInputSchema } from '../inputTypeSchemas/BookingActionWhereUniqueInputSchema'
import { BookingTemplateArgsSchema } from "../outputTypeSchemas/BookingTemplateArgsSchema"
import { BookingRequestActionValueFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestActionValueFindManyArgsSchema"
import { BookingActionCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingActionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingActionSelectSchema: z.ZodType<Prisma.BookingActionSelect> = z.object({
  id: z.boolean().optional(),
  bookingTemplateId: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  config: z.boolean().optional(),
  required: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  bookingTemplate: z.union([z.boolean(),z.lazy(() => BookingTemplateArgsSchema)]).optional(),
  BookingRequestActionValue: z.union([z.boolean(),z.lazy(() => BookingRequestActionValueFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingActionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BookingActionDeleteArgsSchema: z.ZodType<Prisma.BookingActionDeleteArgs> = z.object({
  select: BookingActionSelectSchema.optional(),
  include: z.lazy(() => BookingActionIncludeSchema).optional(),
  where: BookingActionWhereUniqueInputSchema,
}).strict() ;

export default BookingActionDeleteArgsSchema;
