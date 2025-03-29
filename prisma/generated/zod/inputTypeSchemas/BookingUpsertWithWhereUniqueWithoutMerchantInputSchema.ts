import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutMerchantInputSchema } from './BookingUpdateWithoutMerchantInputSchema';
import { BookingUncheckedUpdateWithoutMerchantInputSchema } from './BookingUncheckedUpdateWithoutMerchantInputSchema';
import { BookingCreateWithoutMerchantInputSchema } from './BookingCreateWithoutMerchantInputSchema';
import { BookingUncheckedCreateWithoutMerchantInputSchema } from './BookingUncheckedCreateWithoutMerchantInputSchema';

export const BookingUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutMerchantInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutMerchantInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutMerchantInputSchema;
