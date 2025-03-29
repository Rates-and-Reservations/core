import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutCancellationRequestInputSchema } from './BookingCreateWithoutCancellationRequestInputSchema';
import { BookingUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingUncheckedCreateWithoutCancellationRequestInputSchema';
import { BookingCreateOrConnectWithoutCancellationRequestInputSchema } from './BookingCreateOrConnectWithoutCancellationRequestInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutCancellationRequestInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCancellationRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutCancellationRequestInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutCancellationRequestInputSchema;
