import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueScalarWhereInputSchema } from './BookingRequestActionValueScalarWhereInputSchema';
import { BookingRequestActionValueUpdateManyMutationInputSchema } from './BookingRequestActionValueUpdateManyMutationInputSchema';
import { BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestInputSchema';

export const BookingRequestActionValueUpdateManyWithWhereWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateManyWithWhereWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestActionValueUpdateManyMutationInputSchema),z.lazy(() => BookingRequestActionValueUncheckedUpdateManyWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestActionValueUpdateManyWithWhereWithoutBookingRequestInputSchema;
