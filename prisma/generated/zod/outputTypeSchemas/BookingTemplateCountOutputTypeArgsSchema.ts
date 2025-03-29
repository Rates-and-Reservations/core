import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateCountOutputTypeSelectSchema } from './BookingTemplateCountOutputTypeSelectSchema';

export const BookingTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.BookingTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BookingTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BookingTemplateCountOutputTypeSelectSchema;
