import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutNotificationInputSchema } from './BookingUpdateWithoutNotificationInputSchema';
import { BookingUncheckedUpdateWithoutNotificationInputSchema } from './BookingUncheckedUpdateWithoutNotificationInputSchema';

export const BookingUpdateToOneWithWhereWithoutNotificationInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutNotificationInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutNotificationInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutNotificationInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutNotificationInputSchema;
