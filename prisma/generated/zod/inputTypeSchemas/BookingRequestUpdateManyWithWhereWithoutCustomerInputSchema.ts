import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';
import { BookingRequestUpdateManyMutationInputSchema } from './BookingRequestUpdateManyMutationInputSchema';
import { BookingRequestUncheckedUpdateManyWithoutCustomerInputSchema } from './BookingRequestUncheckedUpdateManyWithoutCustomerInputSchema';

export const BookingRequestUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.BookingRequestUpdateManyWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateManyMutationInputSchema),z.lazy(() => BookingRequestUncheckedUpdateManyWithoutCustomerInputSchema) ]),
}).strict();

export default BookingRequestUpdateManyWithWhereWithoutCustomerInputSchema;
