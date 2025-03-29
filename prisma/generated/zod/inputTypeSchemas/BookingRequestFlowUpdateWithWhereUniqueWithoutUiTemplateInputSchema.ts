import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithoutUiTemplateInputSchema } from './BookingRequestFlowUpdateWithoutUiTemplateInputSchema';
import { BookingRequestFlowUncheckedUpdateWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedUpdateWithoutUiTemplateInputSchema';

export const BookingRequestFlowUpdateWithWhereUniqueWithoutUiTemplateInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateWithWhereUniqueWithoutUiTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestFlowUpdateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateWithoutUiTemplateInputSchema) ]),
}).strict();

export default BookingRequestFlowUpdateWithWhereUniqueWithoutUiTemplateInputSchema;
