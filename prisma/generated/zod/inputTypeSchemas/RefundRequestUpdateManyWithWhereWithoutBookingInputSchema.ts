import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestScalarWhereInputSchema } from './RefundRequestScalarWhereInputSchema';
import { RefundRequestUpdateManyMutationInputSchema } from './RefundRequestUpdateManyMutationInputSchema';
import { RefundRequestUncheckedUpdateManyWithoutBookingInputSchema } from './RefundRequestUncheckedUpdateManyWithoutBookingInputSchema';

export const RefundRequestUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.RefundRequestUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => RefundRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RefundRequestUpdateManyMutationInputSchema),z.lazy(() => RefundRequestUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default RefundRequestUpdateManyWithWhereWithoutBookingInputSchema;
