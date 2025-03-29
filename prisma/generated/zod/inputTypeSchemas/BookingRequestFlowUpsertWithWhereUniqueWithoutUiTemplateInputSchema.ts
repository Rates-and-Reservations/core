import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithoutUiTemplateInputSchema } from './BookingRequestFlowUpdateWithoutUiTemplateInputSchema';
import { BookingRequestFlowUncheckedUpdateWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedUpdateWithoutUiTemplateInputSchema';
import { BookingRequestFlowCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowCreateWithoutUiTemplateInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema';

export const BookingRequestFlowUpsertWithWhereUniqueWithoutUiTemplateInputSchema: z.ZodType<Prisma.BookingRequestFlowUpsertWithWhereUniqueWithoutUiTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestFlowUpdateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateWithoutUiTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema) ]),
}).strict();

export default BookingRequestFlowUpsertWithWhereUniqueWithoutUiTemplateInputSchema;
