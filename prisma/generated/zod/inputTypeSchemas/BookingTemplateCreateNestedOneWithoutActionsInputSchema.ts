import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateCreateWithoutActionsInputSchema } from './BookingTemplateCreateWithoutActionsInputSchema';
import { BookingTemplateUncheckedCreateWithoutActionsInputSchema } from './BookingTemplateUncheckedCreateWithoutActionsInputSchema';
import { BookingTemplateCreateOrConnectWithoutActionsInputSchema } from './BookingTemplateCreateOrConnectWithoutActionsInputSchema';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';

export const BookingTemplateCreateNestedOneWithoutActionsInputSchema: z.ZodType<Prisma.BookingTemplateCreateNestedOneWithoutActionsInput> = z.object({
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutActionsInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingTemplateCreateOrConnectWithoutActionsInputSchema).optional(),
  connect: z.lazy(() => BookingTemplateWhereUniqueInputSchema).optional()
}).strict();

export default BookingTemplateCreateNestedOneWithoutActionsInputSchema;
