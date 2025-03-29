import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutMerchantInputSchema } from './BookingRequestUpdateWithoutMerchantInputSchema';
import { BookingRequestUncheckedUpdateWithoutMerchantInputSchema } from './BookingRequestUncheckedUpdateWithoutMerchantInputSchema';

export const BookingRequestUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestUpdateWithoutMerchantInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestUpdateWithWhereUniqueWithoutMerchantInputSchema;
