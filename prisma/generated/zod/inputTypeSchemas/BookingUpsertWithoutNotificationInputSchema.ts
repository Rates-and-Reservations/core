import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingUpdateWithoutNotificationInputSchema } from './BookingUpdateWithoutNotificationInputSchema';
import { BookingUncheckedUpdateWithoutNotificationInputSchema } from './BookingUncheckedUpdateWithoutNotificationInputSchema';
import { BookingCreateWithoutNotificationInputSchema } from './BookingCreateWithoutNotificationInputSchema';
import { BookingUncheckedCreateWithoutNotificationInputSchema } from './BookingUncheckedCreateWithoutNotificationInputSchema';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';

export const BookingUpsertWithoutNotificationInputSchema: z.ZodType<Prisma.BookingUpsertWithoutNotificationInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutNotificationInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutNotificationInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutNotificationInputSchema),z.lazy(() => BookingUncheckedCreateWithoutNotificationInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export default BookingUpsertWithoutNotificationInputSchema;
