import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingCreateWithoutNotificationInputSchema } from './BookingCreateWithoutNotificationInputSchema';
import { BookingUncheckedCreateWithoutNotificationInputSchema } from './BookingUncheckedCreateWithoutNotificationInputSchema';

export const BookingCreateOrConnectWithoutNotificationInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutNotificationInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutNotificationInputSchema),z.lazy(() => BookingUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export default BookingCreateOrConnectWithoutNotificationInputSchema;
