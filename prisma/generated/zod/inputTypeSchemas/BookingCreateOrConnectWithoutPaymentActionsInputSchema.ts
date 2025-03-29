import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutPaymentActionsInputSchema } from './BookingCreateWithoutPaymentActionsInputSchema';
import { BookingUncheckedCreateWithoutPaymentActionsInputSchema } from './BookingUncheckedCreateWithoutPaymentActionsInputSchema';

export const BookingCreateOrConnectWithoutPaymentActionsInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutPaymentActionsInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutPaymentActionsInputSchema),z.lazy(() => BookingUncheckedCreateWithoutPaymentActionsInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutPaymentActionsInputSchema;
