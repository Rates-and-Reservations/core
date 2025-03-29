import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookingTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.BookingTemplateCountOutputTypeSelect> = z.object({
  actions: z.boolean().optional(),
  BookingRequest: z.boolean().optional(),
}).strict();

export default BookingTemplateCountOutputTypeSelectSchema;
