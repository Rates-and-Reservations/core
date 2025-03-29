import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogUpdateWithoutMerchantInputSchema } from './BookingActivityLogUpdateWithoutMerchantInputSchema';
import { BookingActivityLogUncheckedUpdateWithoutMerchantInputSchema } from './BookingActivityLogUncheckedUpdateWithoutMerchantInputSchema';

export const BookingActivityLogUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingActivityLogUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingActivityLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingActivityLogUpdateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingActivityLogUpdateWithWhereUniqueWithoutMerchantInputSchema;
