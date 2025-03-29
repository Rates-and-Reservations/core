import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutCustomerInputSchema } from './BookingUncheckedUpdateManyWithoutCustomerInputSchema';

export const BookingUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutCustomerInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutCustomerInputSchema;
