import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogScalarWhereInputSchema } from './BookingActivityLogScalarWhereInputSchema';
import { BookingActivityLogUpdateManyMutationInputSchema } from './BookingActivityLogUpdateManyMutationInputSchema';
import { BookingActivityLogUncheckedUpdateManyWithoutMerchantInputSchema } from './BookingActivityLogUncheckedUpdateManyWithoutMerchantInputSchema';

export const BookingActivityLogUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.BookingActivityLogUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingActivityLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingActivityLogUpdateManyMutationInputSchema),z.lazy(() => BookingActivityLogUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default BookingActivityLogUpdateManyWithWhereWithoutMerchantInputSchema;
