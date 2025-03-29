import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { BookingUpdateWithoutCancellationRequestInputSchema } from './BookingUpdateWithoutCancellationRequestInputSchema';
import { BookingUncheckedUpdateWithoutCancellationRequestInputSchema } from './BookingUncheckedUpdateWithoutCancellationRequestInputSchema';

export const BookingUpdateToOneWithWhereWithoutCancellationRequestInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutCancellationRequestInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutCancellationRequestInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutCancellationRequestInputSchema) ]),
}).strict();

export default BookingUpdateToOneWithWhereWithoutCancellationRequestInputSchema;
