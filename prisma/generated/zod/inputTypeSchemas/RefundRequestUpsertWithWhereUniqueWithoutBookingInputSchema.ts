import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithoutBookingInputSchema } from './RefundRequestUpdateWithoutBookingInputSchema';
import { RefundRequestUncheckedUpdateWithoutBookingInputSchema } from './RefundRequestUncheckedUpdateWithoutBookingInputSchema';
import { RefundRequestCreateWithoutBookingInputSchema } from './RefundRequestCreateWithoutBookingInputSchema';
import { RefundRequestUncheckedCreateWithoutBookingInputSchema } from './RefundRequestUncheckedCreateWithoutBookingInputSchema';

export const RefundRequestUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.RefundRequestUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RefundRequestUpdateWithoutBookingInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutBookingInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default RefundRequestUpsertWithWhereUniqueWithoutBookingInputSchema;
