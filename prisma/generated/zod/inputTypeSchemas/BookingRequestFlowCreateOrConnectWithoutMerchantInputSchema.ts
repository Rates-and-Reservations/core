import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowCreateWithoutMerchantInputSchema } from './BookingRequestFlowCreateWithoutMerchantInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema';

export const BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestFlowCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema;
