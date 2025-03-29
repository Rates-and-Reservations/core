import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutPaymentActionsInputSchema } from './BookingUpdateWithoutPaymentActionsInputSchema';
import { BookingUncheckedUpdateWithoutPaymentActionsInputSchema } from './BookingUncheckedUpdateWithoutPaymentActionsInputSchema';
import { BookingCreateWithoutPaymentActionsInputSchema } from './BookingCreateWithoutPaymentActionsInputSchema';
import { BookingUncheckedCreateWithoutPaymentActionsInputSchema } from './BookingUncheckedCreateWithoutPaymentActionsInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutPaymentActionsInputSchema: z.ZodType<Prisma.BookingUpsertWithoutPaymentActionsInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutPaymentActionsInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutPaymentActionsInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutPaymentActionsInputSchema),z.lazy(() => BookingUncheckedCreateWithoutPaymentActionsInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutPaymentActionsInputSchema;
