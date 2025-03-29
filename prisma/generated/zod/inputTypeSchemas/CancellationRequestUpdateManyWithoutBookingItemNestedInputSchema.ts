import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationRequestCreateWithoutBookingItemInputSchema } from './CancellationRequestCreateWithoutBookingItemInputSchema';
import { CancellationRequestUncheckedCreateWithoutBookingItemInputSchema } from './CancellationRequestUncheckedCreateWithoutBookingItemInputSchema';
import { CancellationRequestCreateOrConnectWithoutBookingItemInputSchema } from './CancellationRequestCreateOrConnectWithoutBookingItemInputSchema';
import { CancellationRequestUpsertWithWhereUniqueWithoutBookingItemInputSchema } from './CancellationRequestUpsertWithWhereUniqueWithoutBookingItemInputSchema';
import { CancellationRequestCreateManyBookingItemInputEnvelopeSchema } from './CancellationRequestCreateManyBookingItemInputEnvelopeSchema';
import { CancellationRequestWhereUniqueInputSchema } from './CancellationRequestWhereUniqueInputSchema';
import { CancellationRequestUpdateWithWhereUniqueWithoutBookingItemInputSchema } from './CancellationRequestUpdateWithWhereUniqueWithoutBookingItemInputSchema';
import { CancellationRequestUpdateManyWithWhereWithoutBookingItemInputSchema } from './CancellationRequestUpdateManyWithWhereWithoutBookingItemInputSchema';
import { CancellationRequestScalarWhereInputSchema } from './CancellationRequestScalarWhereInputSchema';

export const CancellationRequestUpdateManyWithoutBookingItemNestedInputSchema: z.ZodType<Prisma.CancellationRequestUpdateManyWithoutBookingItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => CancellationRequestCreateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestCreateWithoutBookingItemInputSchema).array(),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUncheckedCreateWithoutBookingItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestCreateOrConnectWithoutBookingItemInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CancellationRequestUpsertWithWhereUniqueWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUpsertWithWhereUniqueWithoutBookingItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CancellationRequestCreateManyBookingItemInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CancellationRequestWhereUniqueInputSchema),z.lazy(() => CancellationRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CancellationRequestUpdateWithWhereUniqueWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUpdateWithWhereUniqueWithoutBookingItemInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CancellationRequestUpdateManyWithWhereWithoutBookingItemInputSchema),z.lazy(() => CancellationRequestUpdateManyWithWhereWithoutBookingItemInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CancellationRequestScalarWhereInputSchema),z.lazy(() => CancellationRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CancellationRequestUpdateManyWithoutBookingItemNestedInputSchema;
