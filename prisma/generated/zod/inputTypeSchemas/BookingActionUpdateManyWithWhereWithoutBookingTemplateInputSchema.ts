import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionScalarWhereInputSchema } from './BookingActionScalarWhereInputSchema';
import { BookingActionUpdateManyMutationInputSchema } from './BookingActionUpdateManyMutationInputSchema';
import { BookingActionUncheckedUpdateManyWithoutBookingTemplateInputSchema } from './BookingActionUncheckedUpdateManyWithoutBookingTemplateInputSchema';

export const BookingActionUpdateManyWithWhereWithoutBookingTemplateInputSchema: z.ZodType<Prisma.BookingActionUpdateManyWithWhereWithoutBookingTemplateInput> = z.object({
  where: z.lazy(() => BookingActionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingActionUpdateManyMutationInputSchema),z.lazy(() => BookingActionUncheckedUpdateManyWithoutBookingTemplateInputSchema) ]),
}).strict();

export default BookingActionUpdateManyWithWhereWithoutBookingTemplateInputSchema;
