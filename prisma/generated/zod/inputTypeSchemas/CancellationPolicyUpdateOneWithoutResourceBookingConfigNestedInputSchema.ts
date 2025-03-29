import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyCreateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema } from './CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUpsertWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUpsertWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyWhereInputSchema } from './CancellationPolicyWhereInputSchema';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';
import { CancellationPolicyUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema';

export const CancellationPolicyUpdateOneWithoutResourceBookingConfigNestedInputSchema: z.ZodType<Prisma.CancellationPolicyUpdateOneWithoutResourceBookingConfigNestedInput> = z.object({
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema).optional(),
  upsert: z.lazy(() => CancellationPolicyUpsertWithoutResourceBookingConfigInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CancellationPolicyWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CancellationPolicyWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CancellationPolicyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CancellationPolicyUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema) ]).optional(),
}).strict();

export default CancellationPolicyUpdateOneWithoutResourceBookingConfigNestedInputSchema;
