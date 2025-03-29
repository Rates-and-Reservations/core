import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutNotificationInputSchema } from './BookingCreateWithoutNotificationInputSchema';
import { BookingUncheckedCreateWithoutNotificationInputSchema } from './BookingUncheckedCreateWithoutNotificationInputSchema';
import { BookingCreateOrConnectWithoutNotificationInputSchema } from './BookingCreateOrConnectWithoutNotificationInputSchema';
import { BookingUpsertWithoutNotificationInputSchema } from './BookingUpsertWithoutNotificationInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateToOneWithWhereWithoutNotificationInputSchema } from './BookingUpdateToOneWithWhereWithoutNotificationInputSchema';
import { BookingUpdateWithoutNotificationInputSchema } from './BookingUpdateWithoutNotificationInputSchema';
import { BookingUncheckedUpdateWithoutNotificationInputSchema } from './BookingUncheckedUpdateWithoutNotificationInputSchema';

export const BookingUpdateOneWithoutNotificationNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutNotificationInputSchema),z.lazy(() => BookingUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutNotificationInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutNotificationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutNotificationInputSchema),z.lazy(() => BookingUpdateWithoutNotificationInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutNotificationInputSchema) ]).optional(),
}).strict();

export default BookingUpdateOneWithoutNotificationNestedInputSchema;
