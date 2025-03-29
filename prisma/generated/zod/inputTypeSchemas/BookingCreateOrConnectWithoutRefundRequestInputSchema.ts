import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutRefundRequestInputSchema } from './BookingCreateWithoutRefundRequestInputSchema';
import { BookingUncheckedCreateWithoutRefundRequestInputSchema } from './BookingUncheckedCreateWithoutRefundRequestInputSchema';

export const BookingCreateOrConnectWithoutRefundRequestInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutRefundRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRefundRequestInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutRefundRequestInputSchema;
