import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestScalarWhereInputSchema } from './CancellationRequestScalarWhereInputSchema';
import { CancellationRequestUpdateManyMutationInputSchema } from './CancellationRequestUpdateManyMutationInputSchema';
import { CancellationRequestUncheckedUpdateManyWithoutBookingItemInputSchema } from './CancellationRequestUncheckedUpdateManyWithoutBookingItemInputSchema';

export const CancellationRequestUpdateManyWithWhereWithoutBookingItemInputSchema: z.ZodType<Prisma.CancellationRequestUpdateManyWithWhereWithoutBookingItemInput> = z.object({
  where: z.lazy(() => CancellationRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CancellationRequestUpdateManyMutationInputSchema),z.lazy(() => CancellationRequestUncheckedUpdateManyWithoutBookingItemInputSchema) ]),
}).strict();

export default CancellationRequestUpdateManyWithWhereWithoutBookingItemInputSchema;
