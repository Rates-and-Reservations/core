import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithoutBookingInputSchema } from './RefundRequestUpdateWithoutBookingInputSchema';
import { RefundRequestUncheckedUpdateWithoutBookingInputSchema } from './RefundRequestUncheckedUpdateWithoutBookingInputSchema';

export const RefundRequestUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.RefundRequestUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RefundRequestUpdateWithoutBookingInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default RefundRequestUpdateWithWhereUniqueWithoutBookingInputSchema;
