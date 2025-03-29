import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutMerchantInputSchema } from './BookingUpdateWithoutMerchantInputSchema';
import { BookingUncheckedUpdateWithoutMerchantInputSchema } from './BookingUncheckedUpdateWithoutMerchantInputSchema';

export const BookingUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutMerchantInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingUpdateWithWhereUniqueWithoutMerchantInputSchema;
