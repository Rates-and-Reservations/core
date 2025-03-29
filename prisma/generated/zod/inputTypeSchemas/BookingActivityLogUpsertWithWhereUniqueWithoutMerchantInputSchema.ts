import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogUpdateWithoutMerchantInputSchema } from './BookingActivityLogUpdateWithoutMerchantInputSchema';
import { BookingActivityLogUncheckedUpdateWithoutMerchantInputSchema } from './BookingActivityLogUncheckedUpdateWithoutMerchantInputSchema';
import { BookingActivityLogCreateWithoutMerchantInputSchema } from './BookingActivityLogCreateWithoutMerchantInputSchema';
import { BookingActivityLogUncheckedCreateWithoutMerchantInputSchema } from './BookingActivityLogUncheckedCreateWithoutMerchantInputSchema';

export const BookingActivityLogUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingActivityLogUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingActivityLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingActivityLogUpdateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingActivityLogUpsertWithWhereUniqueWithoutMerchantInputSchema;
