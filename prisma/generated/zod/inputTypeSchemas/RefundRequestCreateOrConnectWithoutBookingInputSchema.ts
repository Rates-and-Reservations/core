import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestCreateWithoutBookingInputSchema } from './RefundRequestCreateWithoutBookingInputSchema';
import { RefundRequestUncheckedCreateWithoutBookingInputSchema } from './RefundRequestUncheckedCreateWithoutBookingInputSchema';

export const RefundRequestCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.RefundRequestCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutBookingInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default RefundRequestCreateOrConnectWithoutBookingInputSchema;
