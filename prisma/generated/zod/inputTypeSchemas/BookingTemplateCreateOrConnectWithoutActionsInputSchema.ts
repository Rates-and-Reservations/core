import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateCreateWithoutActionsInputSchema } from './BookingTemplateCreateWithoutActionsInputSchema';
import { BookingTemplateUncheckedCreateWithoutActionsInputSchema } from './BookingTemplateUncheckedCreateWithoutActionsInputSchema';

export const BookingTemplateCreateOrConnectWithoutActionsInputSchema: z.ZodType<Prisma.BookingTemplateCreateOrConnectWithoutActionsInput> = z.object({
  where: z.lazy(() => BookingTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutActionsInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutActionsInputSchema) ]),
}).strict();

export default BookingTemplateCreateOrConnectWithoutActionsInputSchema;
