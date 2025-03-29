import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithoutMerchantInputSchema } from './BookingRequestFlowUpdateWithoutMerchantInputSchema';
import { BookingRequestFlowUncheckedUpdateWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedUpdateWithoutMerchantInputSchema';
import { BookingRequestFlowCreateWithoutMerchantInputSchema } from './BookingRequestFlowCreateWithoutMerchantInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema';

export const BookingRequestFlowUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestFlowUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestFlowUpdateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestFlowUpsertWithWhereUniqueWithoutMerchantInputSchema;
