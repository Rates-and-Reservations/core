import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutCancellationRequestInputSchema } from './BookingCreateWithoutCancellationRequestInputSchema';
import { BookingUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingUncheckedCreateWithoutCancellationRequestInputSchema';

export const BookingCreateOrConnectWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutCancellationRequestInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCancellationRequestInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutCancellationRequestInputSchema;
