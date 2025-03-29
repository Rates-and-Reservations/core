import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutRefundRequestInputSchema } from './BookingCreateWithoutRefundRequestInputSchema';
import { BookingUncheckedCreateWithoutRefundRequestInputSchema } from './BookingUncheckedCreateWithoutRefundRequestInputSchema';
import { BookingCreateOrConnectWithoutRefundRequestInputSchema } from './BookingCreateOrConnectWithoutRefundRequestInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutRefundRequestInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutRefundRequestInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutRefundRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRefundRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutRefundRequestInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutRefundRequestInputSchema;
