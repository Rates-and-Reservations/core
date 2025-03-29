import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowScalarWhereInputSchema } from './BookingRequestFlowScalarWhereInputSchema';
import { BookingRequestFlowUpdateManyMutationInputSchema } from './BookingRequestFlowUpdateManyMutationInputSchema';
import { BookingRequestFlowUncheckedUpdateManyWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedUpdateManyWithoutUiTemplateInputSchema';

export const BookingRequestFlowUpdateManyWithWhereWithoutUiTemplateInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateManyWithWhereWithoutUiTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestFlowScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestFlowUpdateManyMutationInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateManyWithoutUiTemplateInputSchema) ]),
}).strict();

export default BookingRequestFlowUpdateManyWithWhereWithoutUiTemplateInputSchema;
