import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutCancellationRequestInputSchema } from './BookingUpdateWithoutCancellationRequestInputSchema';
import { BookingUncheckedUpdateWithoutCancellationRequestInputSchema } from './BookingUncheckedUpdateWithoutCancellationRequestInputSchema';
import { BookingCreateWithoutCancellationRequestInputSchema } from './BookingCreateWithoutCancellationRequestInputSchema';
import { BookingUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingUncheckedCreateWithoutCancellationRequestInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingUpsertWithoutCancellationRequestInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutCancellationRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutCancellationRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCancellationRequestInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutCancellationRequestInputSchema;
