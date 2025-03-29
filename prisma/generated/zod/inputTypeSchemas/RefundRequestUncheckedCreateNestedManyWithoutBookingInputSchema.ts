import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutBookingInputSchema } from './RefundRequestCreateWithoutBookingInputSchema';
import { RefundRequestUncheckedCreateWithoutBookingInputSchema } from './RefundRequestUncheckedCreateWithoutBookingInputSchema';
import { RefundRequestCreateOrConnectWithoutBookingInputSchema } from './RefundRequestCreateOrConnectWithoutBookingInputSchema';
import { RefundRequestCreateManyBookingInputEnvelopeSchema } from './RefundRequestCreateManyBookingInputEnvelopeSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';

export const RefundRequestUncheckedCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.RefundRequestUncheckedCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutBookingInputSchema),z.lazy(() => RefundRequestCreateWithoutBookingInputSchema).array(),z.lazy(() => RefundRequestUncheckedCreateWithoutBookingInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundRequestCreateOrConnectWithoutBookingInputSchema),z.lazy(() => RefundRequestCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundRequestCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RefundRequestUncheckedCreateNestedManyWithoutBookingInputSchema;
