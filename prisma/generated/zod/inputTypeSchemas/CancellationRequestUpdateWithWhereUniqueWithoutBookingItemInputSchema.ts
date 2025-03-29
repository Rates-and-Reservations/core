import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestUpdateWithoutBookingItemInputSchema } from './CancellationRequestUpdateWithoutBookingItemInputSchema';
import { CancellationRequestUncheckedUpdateWithoutBookingItemInputSchema } from './CancellationRequestUncheckedUpdateWithoutBookingItemInputSchema';

export const CancellationRequestUpdateWithWhereUniqueWithoutBookingItemInputSchema: z.ZodType<Prisma.CancellationRequestUpdateWithWhereUniqueWithoutBookingItemInput> = z.object({
  where: z.lazy(() => CancellationRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CancellationRequestUpdateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUncheckedUpdateWithoutBookingItemInputSchema) ]),
}).strict();

export default CancellationRequestUpdateWithWhereUniqueWithoutBookingItemInputSchema;
