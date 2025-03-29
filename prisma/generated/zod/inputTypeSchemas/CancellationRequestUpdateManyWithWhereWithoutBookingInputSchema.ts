import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestScalarWhereInputSchema } from './CancellationRequestScalarWhereInputSchema';
import { CancellationRequestUpdateManyMutationInputSchema } from './CancellationRequestUpdateManyMutationInputSchema';
import { CancellationRequestUncheckedUpdateManyWithoutBookingInputSchema } from './CancellationRequestUncheckedUpdateManyWithoutBookingInputSchema';

export const CancellationRequestUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.CancellationRequestUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => CancellationRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CancellationRequestUpdateManyMutationInputSchema),z.lazy(() => CancellationRequestUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default CancellationRequestUpdateManyWithWhereWithoutBookingInputSchema;
