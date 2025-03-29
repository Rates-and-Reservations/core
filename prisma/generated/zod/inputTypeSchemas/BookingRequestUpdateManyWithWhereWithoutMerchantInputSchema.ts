import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';
import { BookingRequestUpdateManyMutationInputSchema } from './BookingRequestUpdateManyMutationInputSchema';
import { BookingRequestUncheckedUpdateManyWithoutMerchantInputSchema } from './BookingRequestUncheckedUpdateManyWithoutMerchantInputSchema';

export const BookingRequestUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateManyMutationInputSchema),z.lazy(() => BookingRequestUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestUpdateManyWithWhereWithoutMerchantInputSchema;
