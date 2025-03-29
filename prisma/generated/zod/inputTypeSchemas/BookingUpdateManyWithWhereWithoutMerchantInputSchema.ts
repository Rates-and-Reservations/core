import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';
import { BookingUpdateManyMutationInputSchema } from './BookingUpdateManyMutationInputSchema';
import { BookingUncheckedUpdateManyWithoutMerchantInputSchema } from './BookingUncheckedUpdateManyWithoutMerchantInputSchema';

export const BookingUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default BookingUpdateManyWithWhereWithoutMerchantInputSchema;
