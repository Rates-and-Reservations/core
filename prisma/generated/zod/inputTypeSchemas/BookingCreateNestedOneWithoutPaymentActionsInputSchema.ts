import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutPaymentActionsInputSchema } from './BookingCreateWithoutPaymentActionsInputSchema';
import { BookingUncheckedCreateWithoutPaymentActionsInputSchema } from './BookingUncheckedCreateWithoutPaymentActionsInputSchema';
import { BookingCreateOrConnectWithoutPaymentActionsInputSchema } from './BookingCreateOrConnectWithoutPaymentActionsInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutPaymentActionsInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutPaymentActionsInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutPaymentActionsInputSchema),z.lazy(() => BookingUncheckedCreateWithoutPaymentActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutPaymentActionsInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutPaymentActionsInputSchema;
