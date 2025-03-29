import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';
import { BookingTemplateUpdateWithoutActionsInputSchema } from './BookingTemplateUpdateWithoutActionsInputSchema';
import { BookingTemplateUncheckedUpdateWithoutActionsInputSchema } from './BookingTemplateUncheckedUpdateWithoutActionsInputSchema';

export const BookingTemplateUpdateToOneWithWhereWithoutActionsInputSchema: z.ZodType<Prisma.BookingTemplateUpdateToOneWithWhereWithoutActionsInput> = z.object({
  where: z.lazy(() => BookingTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingTemplateUpdateWithoutActionsInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutActionsInputSchema) ]),
}).strict();

export default BookingTemplateUpdateToOneWithWhereWithoutActionsInputSchema;
