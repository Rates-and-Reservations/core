import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutCancellationRequestInputSchema } from './BookingCreateWithoutCancellationRequestInputSchema';
import { BookingUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingUncheckedCreateWithoutCancellationRequestInputSchema';
import { BookingCreateOrConnectWithoutCancellationRequestInputSchema } from './BookingCreateOrConnectWithoutCancellationRequestInputSchema';
import { BookingUpsertWithoutCancellationRequestInputSchema } from './BookingUpsertWithoutCancellationRequestInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutCancellationRequestInputSchema } from './BookingUpdateToOneWithWhereWithoutCancellationRequestInputSchema';
import { BookingUpdateWithoutCancellationRequestInputSchema } from './BookingUpdateWithoutCancellationRequestInputSchema';
import { BookingUncheckedUpdateWithoutCancellationRequestInputSchema } from './BookingUncheckedUpdateWithoutCancellationRequestInputSchema';

export const BookingUpdateOneRequiredWithoutCancellationRequestNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutCancellationRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCancellationRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutCancellationRequestInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutCancellationRequestInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutCancellationRequestInputSchema),z.lazy(() => BookingUpdateWithoutCancellationRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutCancellationRequestInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneRequiredWithoutCancellationRequestNestedInputSchema;
