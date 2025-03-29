import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutCancellationRequestInputSchema } from './BookingItemCreateWithoutCancellationRequestInputSchema';
import { BookingItemUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingItemUncheckedCreateWithoutCancellationRequestInputSchema';
import { BookingItemCreateOrConnectWithoutCancellationRequestInputSchema } from './BookingItemCreateOrConnectWithoutCancellationRequestInputSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';

export const BookingItemCreateNestedOneWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingItemCreateNestedOneWithoutCancellationRequestInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutCancellationRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingItemCreateOrConnectWithoutCancellationRequestInputSchema).optional(),
  connect: z.lazy(() => BookingItemWhereUniqueInputSchema).optional()
}).strict();

export default BookingItemCreateNestedOneWithoutCancellationRequestInputSchema;
