import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutMerchantInputSchema } from './BookingCreateWithoutMerchantInputSchema';
import { BookingUncheckedCreateWithoutMerchantInputSchema } from './BookingUncheckedCreateWithoutMerchantInputSchema';

export const BookingCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutMerchantInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutMerchantInputSchema;
