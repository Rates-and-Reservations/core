import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';
import { BookingActionUpdateWithoutBookingTemplateInputSchema } from './BookingActionUpdateWithoutBookingTemplateInputSchema';
import { BookingActionUncheckedUpdateWithoutBookingTemplateInputSchema } from './BookingActionUncheckedUpdateWithoutBookingTemplateInputSchema';

export const BookingActionUpdateWithWhereUniqueWithoutBookingTemplateInputSchema: z.ZodType<Prisma.BookingActionUpdateWithWhereUniqueWithoutBookingTemplateInput> = z.object({
  where: z.lazy(() => BookingActionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingActionUpdateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUncheckedUpdateWithoutBookingTemplateInputSchema) ]),
}).strict();

export default BookingActionUpdateWithWhereUniqueWithoutBookingTemplateInputSchema;
