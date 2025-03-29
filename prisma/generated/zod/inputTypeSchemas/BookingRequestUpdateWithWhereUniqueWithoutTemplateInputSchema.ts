import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutTemplateInputSchema } from './BookingRequestUpdateWithoutTemplateInputSchema';
import { BookingRequestUncheckedUpdateWithoutTemplateInputSchema } from './BookingRequestUncheckedUpdateWithoutTemplateInputSchema';

export const BookingRequestUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.BookingRequestUpdateWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateWithoutTemplateInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutTemplateInputSchema) ]),
}).strict();

export default BookingRequestUpdateWithWhereUniqueWithoutTemplateInputSchema;
