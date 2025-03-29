import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingTemplateUpdateManyMutationInputSchema'
import { BookingTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingTemplateUncheckedUpdateManyInputSchema'
import { BookingTemplateWhereInputSchema } from '../inputTypeSchemas/BookingTemplateWhereInputSchema'

export const BookingTemplateUpdateManyArgsSchema: z.ZodType<Prisma.BookingTemplateUpdateManyArgs> = z.object({
  data: z.union([ BookingTemplateUpdateManyMutationInputSchema,BookingTemplateUncheckedUpdateManyInputSchema ]),
  where: BookingTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingTemplateUpdateManyArgsSchema;
