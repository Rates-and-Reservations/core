import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';

export const BookingTemplateScalarRelationFilterSchema: z.ZodType<Prisma.BookingTemplateScalarRelationFilter> = z.object({
  is: z.lazy(() => BookingTemplateWhereInputSchema).optional(),
  isNot: z.lazy(() => BookingTemplateWhereInputSchema).optional()
}).strict();

export default BookingTemplateScalarRelationFilterSchema;
