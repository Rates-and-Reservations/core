import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogCreateWithoutMerchantInputSchema } from './BookingActivityLogCreateWithoutMerchantInputSchema';
import { BookingActivityLogUncheckedCreateWithoutMerchantInputSchema } from './BookingActivityLogUncheckedCreateWithoutMerchantInputSchema';

export const BookingActivityLogCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.BookingActivityLogCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingActivityLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingActivityLogCreateOrConnectWithoutMerchantInputSchema;
