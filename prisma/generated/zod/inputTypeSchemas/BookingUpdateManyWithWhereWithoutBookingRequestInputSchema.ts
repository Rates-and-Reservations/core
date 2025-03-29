import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutBookingRequestInputSchema } from './BookingUncheckedUpdateManyWithoutBookingRequestInputSchema';

export const BookingUpdateManyWithWhereWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutBookingRequestInputSchema;
