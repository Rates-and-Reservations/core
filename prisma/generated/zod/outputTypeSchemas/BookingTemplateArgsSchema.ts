import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingTemplateSelectSchema } from '../inputTypeSchemas/BookingTemplateSelectSchema';
import { BookingTemplateIncludeSchema } from '../inputTypeSchemas/BookingTemplateIncludeSchema';

export const BookingTemplateArgsSchema: z.ZodType<Prisma.BookingTemplateDefaultArgs> = z.object({
  select: z.lazy(() => BookingTemplateSelectSchema).optional(),
  include: z.lazy(() => BookingTemplateIncludeSchema).optional(),
}).strict();

export default BookingTemplateArgsSchema;
