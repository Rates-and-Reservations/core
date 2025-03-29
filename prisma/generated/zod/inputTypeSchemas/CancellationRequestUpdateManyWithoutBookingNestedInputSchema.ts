import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestCreateWithoutBookingInputSchema } from './CancellationRequestCreateWithoutBookingInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingInputSchema';
import { CancellationRequestCreateOrConnectWithoutBookingInputSchema } from './CancellationRequestCreateOrConnectWithoutBookingInputSchema';
import { CancellationRequestUpsertWithWhereUniqueWithoutBookingInputSchema } from './CancellationRequestUpsertWithWhereUniqueWithoutBookingInputSchema';
import { CancellationRequestCreateManyBookingInputEnvelopeSchema } from './CancellationRequestCreateManyBookingInputEnvelopeSchema';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestUpdateWithWhereUniqueWithoutBookingInputSchema } from './CancellationRequestUpdateWithWhereUniqueWithoutBookingInputSchema';
import { CancellationRequestUpdateManyWithWhereWithoutBookingInputSchema } from './CancellationRequestUpdateManyWithWhereWithoutBookingInputSchema';
import { CancellationRequestScalarWhereInputSchema } from './CancellationRequestScalarWhereInputSchema';

export const CancellationRequestUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.CancellationRequestUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingInputSchema),z.lazy(() => CancellationRequestCreateWithoutBookingInputSchema).array(),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingInputSchema),z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CancellationRequestUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => CancellationRequestUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CancellationRequestCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CancellationRequestUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => CancellationRequestUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CancellationRequestUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => CancellationRequestUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CancellationRequestScalarWhereInputSchema),z.lazy(() => CancellationRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CancellationRequestUpdateManyWithoutBookingNestedInputSchema;
