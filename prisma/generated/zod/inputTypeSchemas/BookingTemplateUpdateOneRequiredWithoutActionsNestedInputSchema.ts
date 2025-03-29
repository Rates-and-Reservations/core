import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateCreateWithoutActionsInputSchema } from './BookingTemplateCreateWithoutActionsInputSchema';
import { BookingTemplateUncheckedCreateWithoutActionsInputSchema } from './BookingTemplateUncheckedCreateWithoutActionsInputSchema';
import { BookingTemplateCreateOrConnectWithoutActionsInputSchema } from './BookingTemplateCreateOrConnectWithoutActionsInputSchema';
import { BookingTemplateUpsertWithoutActionsInputSchema } from './BookingTemplateUpsertWithoutActionsInputSchema';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateUpdateToOneWithWhereWithoutActionsInputSchema } from './BookingTemplateUpdateToOneWithWhereWithoutActionsInputSchema';
import { BookingTemplateUpdateWithoutActionsInputSchema } from './BookingTemplateUpdateWithoutActionsInputSchema';
import { BookingTemplateUncheckedUpdateWithoutActionsInputSchema } from './BookingTemplateUncheckedUpdateWithoutActionsInputSchema';

export const BookingTemplateUpdateOneRequiredWithoutActionsNestedInputSchema: z.ZodType<Prisma.BookingTemplateUpdateOneRequiredWithoutActionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutActionsInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingTemplateCreateOrConnectWithoutActionsInputSchema).optional(),
  upsert: z.lazy(() => BookingTemplateUpsertWithoutActionsInputSchema).optional(),
  connect: z.lazy(() => BookingTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingTemplateUpdateToOneWithWhereWithoutActionsInputSchema),z.lazy(() => BookingTemplateUpdateWithoutActionsInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutActionsInputSchema) ]).optional(),
}).strict();

export default BookingTemplateUpdateOneRequiredWithoutActionsNestedInputSchema;
