import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestCreateWithoutMerchantInputSchema } from './BookingRequestCreateWithoutMerchantInputSchema';
import { BookingRequestUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestUncheckedCreateWithoutMerchantInputSchema';

export const BookingRequestCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestCreateOrConnectWithoutMerchantInputSchema;
