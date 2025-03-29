import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowScalarWhereInputSchema } from './BookingRequestFlowScalarWhereInputSchema';
import { BookingRequestFlowUpdateManyMutationInputSchema } from './BookingRequestFlowUpdateManyMutationInputSchema';
import { BookingRequestFlowUncheckedUpdateManyWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedUpdateManyWithoutBookingRequestInputSchema';

export const BookingRequestFlowUpdateManyWithWhereWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateManyWithWhereWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestFlowScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestFlowUpdateManyMutationInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateManyWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestFlowUpdateManyWithWhereWithoutBookingRequestInputSchema;
