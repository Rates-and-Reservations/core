import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithoutMerchantInputSchema } from './BookingRequestFlowUpdateWithoutMerchantInputSchema';
import { BookingRequestFlowUncheckedUpdateWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedUpdateWithoutMerchantInputSchema';

export const BookingRequestFlowUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingRequestFlowUpdateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestFlowUpdateWithWhereUniqueWithoutMerchantInputSchema;
