import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemScalarWhereInputSchema } from './BookingItemScalarWhereInputSchema';
import { BookingItemUpdateManyMutationInputSchema } from './BookingItemUpdateManyMutationInputSchema';
import { BookingItemUncheckedUpdateManyWithoutBookingRateSnapshotInputSchema } from './BookingItemUncheckedUpdateManyWithoutBookingRateSnapshotInputSchema';

export const BookingItemUpdateManyWithWhereWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.BookingItemUpdateManyWithWhereWithoutBookingRateSnapshotInput> = z.object({
  where: z.lazy(() => BookingItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingItemUpdateManyMutationInputSchema),z.lazy(() => BookingItemUncheckedUpdateManyWithoutBookingRateSnapshotInputSchema) ]),
}).strict();

export default BookingItemUpdateManyWithWhereWithoutBookingRateSnapshotInputSchema;
