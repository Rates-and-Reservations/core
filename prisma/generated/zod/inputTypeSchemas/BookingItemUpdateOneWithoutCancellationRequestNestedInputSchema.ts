import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingItemCreateWithoutCancellationRequestInputSchema } from './BookingItemCreateWithoutCancellationRequestInputSchema';
import { BookingItemUncheckedCreateWithoutCancellationRequestInputSchema } from './BookingItemUncheckedCreateWithoutCancellationRequestInputSchema';
import { BookingItemCreateOrConnectWithoutCancellationRequestInputSchema } from './BookingItemCreateOrConnectWithoutCancellationRequestInputSchema';
import { BookingItemUpsertWithoutCancellationRequestInputSchema } from './BookingItemUpsertWithoutCancellationRequestInputSchema';
import { BookingItemWhereInputSchema } from './BookingItemWhereInputSchema';
import { BookingItemWhereUniqueInputSchema } from './BookingItemWhereUniqueInputSchema';
import { BookingItemUpdateToOneWithWhereWithoutCancellationRequestInputSchema } from './BookingItemUpdateToOneWithWhereWithoutCancellationRequestInputSchema';
import { BookingItemUpdateWithoutCancellationRequestInputSchema } from './BookingItemUpdateWithoutCancellationRequestInputSchema';
import { BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema } from './BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema';

export const BookingItemUpdateOneWithoutCancellationRequestNestedInputSchema: z.ZodType<Prisma.BookingItemUpdateOneWithoutCancellationRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingItemCreateWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUncheckedCreateWithoutCancellationRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingItemCreateOrConnectWithoutCancellationRequestInputSchema).optional(),
  upsert: z.lazy(() => BookingItemUpsertWithoutCancellationRequestInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BookingItemWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BookingItemWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BookingItemWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingItemUpdateToOneWithWhereWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUpdateWithoutCancellationRequestInputSchema),z.lazy(() => BookingItemUncheckedUpdateWithoutCancellationRequestInputSchema) ]).optional(),
}).strict();

export default BookingItemUpdateOneWithoutCancellationRequestNestedInputSchema;
