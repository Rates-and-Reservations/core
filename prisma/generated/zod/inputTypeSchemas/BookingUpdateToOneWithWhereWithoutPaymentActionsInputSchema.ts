import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutPaymentActionsInputSchema } from './BookingUpdateWithoutPaymentActionsInputSchema';
import { BookingUncheckedUpdateWithoutPaymentActionsInputSchema } from './BookingUncheckedUpdateWithoutPaymentActionsInputSchema';

export const BookingUpdateToOneWithWhereWithoutPaymentActionsInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutPaymentActionsInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutPaymentActionsInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutPaymentActionsInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutPaymentActionsInputSchema;
