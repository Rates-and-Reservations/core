import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutTemplateInputSchema } from './BookingRequestUpdateWithoutTemplateInputSchema';
import { BookingRequestUncheckedUpdateWithoutTemplateInputSchema } from './BookingRequestUncheckedUpdateWithoutTemplateInputSchema';
import { BookingRequestCreateWithoutTemplateInputSchema } from './BookingRequestCreateWithoutTemplateInputSchema';
import { BookingRequestUncheckedCreateWithoutTemplateInputSchema } from './BookingRequestUncheckedCreateWithoutTemplateInputSchema';

export const BookingRequestUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.BookingRequestUpsertWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithoutTemplateInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutTemplateInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default BookingRequestUpsertWithWhereUniqueWithoutTemplateInputSchema;
