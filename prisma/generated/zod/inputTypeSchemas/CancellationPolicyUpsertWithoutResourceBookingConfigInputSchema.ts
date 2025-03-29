import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyCreateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyWhereInputSchema } from './CancellationPolicyWhereInputSchema';

export const CancellationPolicyUpsertWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.CancellationPolicyUpsertWithoutResourceBookingConfigInput> = z.object({
  update: z.union([ z.lazy(() => CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema) ]),
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema) ]),
  where: z.lazy(() => CancellationPolicyWhereInputSchema).optional()
}).strict();

export default CancellationPolicyUpsertWithoutResourceBookingConfigInputSchema;
