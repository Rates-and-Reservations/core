import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';

export const BookingTemplateListRelationFilterSchema: z.ZodType<Prisma.BookingTemplateListRelationFilter> = z.object({
  every: z.lazy(() => BookingTemplateWhereInputSchema).optional(),
  some: z.lazy(() => BookingTemplateWhereInputSchema).optional(),
  none: z.lazy(() => BookingTemplateWhereInputSchema).optional()
}).strict();

export default BookingTemplateListRelationFilterSchema;
