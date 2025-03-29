import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutRefundRequestInputSchema } from './BookingUpdateWithoutRefundRequestInputSchema';
import { BookingUncheckedUpdateWithoutRefundRequestInputSchema } from './BookingUncheckedUpdateWithoutRefundRequestInputSchema';
import { BookingCreateWithoutRefundRequestInputSchema } from './BookingCreateWithoutRefundRequestInputSchema';
import { BookingUncheckedCreateWithoutRefundRequestInputSchema } from './BookingUncheckedCreateWithoutRefundRequestInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutRefundRequestInputSchema: z.ZodType<Prisma.BookingUpsertWithoutRefundRequestInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutRefundRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutRefundRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutRefundRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRefundRequestInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutRefundRequestInputSchema;
