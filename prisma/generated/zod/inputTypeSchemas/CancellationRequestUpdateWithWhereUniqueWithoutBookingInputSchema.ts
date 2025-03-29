import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestUpdateWithoutBookingInputSchema } from './CancellationRequestUpdateWithoutBookingInputSchema';
import { CancellationRequestUncheckedUpdateWithoutBookingInputSchema } from './CancellationRequestUncheckedUpdateWithoutBookingInputSchema';

export const CancellationRequestUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.CancellationRequestUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => CancellationRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CancellationRequestUpdateWithoutBookingInputSchema),z.lazy(() => CancellationRequestUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default CancellationRequestUpdateWithWhereUniqueWithoutBookingInputSchema;
