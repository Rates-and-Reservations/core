import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutRefundRequestInputSchema } from './BookingCreateWithoutRefundRequestInputSchema';
import { BookingUncheckedCreateWithoutRefundRequestInputSchema } from './BookingUncheckedCreateWithoutRefundRequestInputSchema';
import { BookingCreateOrConnectWithoutRefundRequestInputSchema } from './BookingCreateOrConnectWithoutRefundRequestInputSchema';
import { BookingUpsertWithoutRefundRequestInputSchema } from './BookingUpsertWithoutRefundRequestInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutRefundRequestInputSchema } from './BookingUpdateToOneWithWhereWithoutRefundRequestInputSchema';
import { BookingUpdateWithoutRefundRequestInputSchema } from './BookingUpdateWithoutRefundRequestInputSchema';
import { BookingUncheckedUpdateWithoutRefundRequestInputSchema } from './BookingUncheckedUpdateWithoutRefundRequestInputSchema';

export const BookingUpdateOneRequiredWithoutRefundRequestNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutRefundRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutRefundRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutRefundRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutRefundRequestInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutRefundRequestInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutRefundRequestInputSchema),z.lazy(() => BookingUpdateWithoutRefundRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutRefundRequestInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneRequiredWithoutRefundRequestNestedInputSchema;
