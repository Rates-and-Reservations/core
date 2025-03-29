import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutNotificationInputSchema } from './BookingCreateWithoutNotificationInputSchema';
import { BookingUncheckedCreateWithoutNotificationInputSchema } from './BookingUncheckedCreateWithoutNotificationInputSchema';
import { BookingCreateOrConnectWithoutNotificationInputSchema } from './BookingCreateOrConnectWithoutNotificationInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutNotificationInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutNotificationInputSchema),z.lazy(() => BookingUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutNotificationInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutNotificationInputSchema;
