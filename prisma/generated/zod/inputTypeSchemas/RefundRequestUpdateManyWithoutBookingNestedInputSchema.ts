import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutBookingInputSchema } from './RefundRequestCreateWithoutBookingInputSchema';
import { RefundRequestUncheckedCreateWithoutBookingInputSchema } from './RefundRequestUncheckedCreateWithoutBookingInputSchema';
import { RefundRequestCreateOrConnectWithoutBookingInputSchema } from './RefundRequestCreateOrConnectWithoutBookingInputSchema';
import { RefundRequestUpsertWithWhereUniqueWithoutBookingInputSchema } from './RefundRequestUpsertWithWhereUniqueWithoutBookingInputSchema';
import { RefundRequestCreateManyBookingInputEnvelopeSchema } from './RefundRequestCreateManyBookingInputEnvelopeSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithWhereUniqueWithoutBookingInputSchema } from './RefundRequestUpdateWithWhereUniqueWithoutBookingInputSchema';
import { RefundRequestUpdateManyWithWhereWithoutBookingInputSchema } from './RefundRequestUpdateManyWithWhereWithoutBookingInputSchema';
import { RefundRequestScalarWhereInputSchema } from './RefundRequestScalarWhereInputSchema';

export const RefundRequestUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.RefundRequestUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutBookingInputSchema),z.lazy(() => RefundRequestCreateWithoutBookingInputSchema).array(),z.lazy(() => RefundRequestUncheckedCreateWithoutBookingInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundRequestCreateOrConnectWithoutBookingInputSchema),z.lazy(() => RefundRequestCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RefundRequestUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => RefundRequestUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundRequestCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RefundRequestUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => RefundRequestUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RefundRequestUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => RefundRequestUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RefundRequestScalarWhereInputSchema),z.lazy(() => RefundRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RefundRequestUpdateManyWithoutBookingNestedInputSchema;
