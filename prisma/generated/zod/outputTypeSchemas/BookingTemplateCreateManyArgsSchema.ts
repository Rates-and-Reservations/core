import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateCreateManyInputSchema } from '../inputTypeSchemas/BookingTemplateCreateManyInputSchema'

export const BookingTemplateCreateManyArgsSchema: z.ZodType<Prisma.BookingTemplateCreateManyArgs> = z.object({
  data: z.union([ BookingTemplateCreateManyInputSchema,BookingTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingTemplateCreateManyArgsSchema;
