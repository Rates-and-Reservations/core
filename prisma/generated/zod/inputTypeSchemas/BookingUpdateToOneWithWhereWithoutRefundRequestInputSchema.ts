import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutRefundRequestInputSchema } from './BookingUpdateWithoutRefundRequestInputSchema';
import { BookingUncheckedUpdateWithoutRefundRequestInputSchema } from './BookingUncheckedUpdateWithoutRefundRequestInputSchema';

export const BookingUpdateToOneWithWhereWithoutRefundRequestInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutRefundRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutRefundRequestInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutRefundRequestInputSchema;
