import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutMerchantInputSchema } from './BookingRequestUpdateWithoutMerchantInputSchema';
import { BookingRequestUncheckedUpdateWithoutMerchantInputSchema } from './BookingRequestUncheckedUpdateWithoutMerchantInputSchema';
import { BookingRequestCreateWithoutMerchantInputSchema } from './BookingRequestCreateWithoutMerchantInputSchema';
import { BookingRequestUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestUncheckedCreateWithoutMerchantInputSchema';

export const BookingRequestUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithoutMerchantInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestUpsertWithWhereUniqueWithoutMerchantInputSchema;
