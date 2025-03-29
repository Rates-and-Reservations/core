import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateWhereInputSchema } from '../inputTypeSchemas/BookingTemplateWhereInputSchema'

export const BookingTemplateDeleteManyArgsSchema: z.ZodType<Prisma.BookingTemplateDeleteManyArgs> = z.object({
  where: BookingTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingTemplateDeleteManyArgsSchema;
