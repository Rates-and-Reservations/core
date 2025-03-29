import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyWhereInputSchema } from './CancellationPolicyWhereInputSchema';
import { CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema';

export const CancellationPolicyUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.CancellationPolicyUpdateToOneWithWhereWithoutResourceBookingConfigInput> = z.object({
  where: z.lazy(() => CancellationPolicyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUncheckedUpdateWithoutResourceBookingConfigInputSchema) ]),
}).strict();

export default CancellationPolicyUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema;
