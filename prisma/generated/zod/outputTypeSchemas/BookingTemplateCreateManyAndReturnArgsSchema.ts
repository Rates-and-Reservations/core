import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateCreateManyInputSchema } from '../inputTypeSchemas/BookingTemplateCreateManyInputSchema'

export const BookingTemplateCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingTemplateCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingTemplateCreateManyInputSchema,BookingTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingTemplateCreateManyAndReturnArgsSchema;
