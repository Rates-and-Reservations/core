import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';
import { BookingRequestUpdateManyMutationInputSchema } from './BookingRequestUpdateManyMutationInputSchema';
import { BookingRequestUncheckedUpdateManyWithoutTemplateInputSchema } from './BookingRequestUncheckedUpdateManyWithoutTemplateInputSchema';

export const BookingRequestUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.BookingRequestUpdateManyWithWhereWithoutTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateManyMutationInputSchema),z.lazy(() => BookingRequestUncheckedUpdateManyWithoutTemplateInputSchema) ]),
}).strict();

export default BookingRequestUpdateManyWithWhereWithoutTemplateInputSchema;
