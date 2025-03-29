import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';
import { CancellationPolicyCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyCreateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema';

export const CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInput> = z.object({
  where: z.lazy(() => CancellationPolicyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema) ]),
}).strict();

export default CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema;
