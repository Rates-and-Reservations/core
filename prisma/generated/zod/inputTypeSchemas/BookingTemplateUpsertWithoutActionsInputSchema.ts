import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateUpdateWithoutActionsInputSchema } from './BookingTemplateUpdateWithoutActionsInputSchema';
import { BookingTemplateUncheckedUpdateWithoutActionsInputSchema } from './BookingTemplateUncheckedUpdateWithoutActionsInputSchema';
import { BookingTemplateCreateWithoutActionsInputSchema } from './BookingTemplateCreateWithoutActionsInputSchema';
import { BookingTemplateUncheckedCreateWithoutActionsInputSchema } from './BookingTemplateUncheckedCreateWithoutActionsInputSchema';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';

export const BookingTemplateUpsertWithoutActionsInputSchema: z.ZodType<Prisma.BookingTemplateUpsertWithoutActionsInput> = z.object({
  update: z.union([ z.lazy(() => BookingTemplateUpdateWithoutActionsInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutActionsInputSchema) ]),
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutActionsInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutActionsInputSchema) ]),
  where: z.lazy(() => BookingTemplateWhereInputSchema).optional()
}).strict();

export default BookingTemplateUpsertWithoutActionsInputSchema;
