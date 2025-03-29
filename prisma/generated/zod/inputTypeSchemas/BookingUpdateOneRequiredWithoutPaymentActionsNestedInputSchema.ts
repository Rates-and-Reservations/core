import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutPaymentActionsInputSchema } from './BookingCreateWithoutPaymentActionsInputSchema';
import { BookingUncheckedCreateWithoutPaymentActionsInputSchema } from './BookingUncheckedCreateWithoutPaymentActionsInputSchema';
import { BookingCreateOrConnectWithoutPaymentActionsInputSchema } from './BookingCreateOrConnectWithoutPaymentActionsInputSchema';
import { BookingUpsertWithoutPaymentActionsInputSchema } from './BookingUpsertWithoutPaymentActionsInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutPaymentActionsInputSchema } from './BookingUpdateToOneWithWhereWithoutPaymentActionsInputSchema';
import { BookingUpdateWithoutPaymentActionsInputSchema } from './BookingUpdateWithoutPaymentActionsInputSchema';
import { BookingUncheckedUpdateWithoutPaymentActionsInputSchema } from './BookingUncheckedUpdateWithoutPaymentActionsInputSchema';

export const BookingUpdateOneRequiredWithoutPaymentActionsNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutPaymentActionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutPaymentActionsInputSchema),z.lazy(() => BookingUncheckedCreateWithoutPaymentActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutPaymentActionsInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutPaymentActionsInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutPaymentActionsInputSchema),z.lazy(() => BookingUpdateWithoutPaymentActionsInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutPaymentActionsInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneRequiredWithoutPaymentActionsNestedInputSchema;
