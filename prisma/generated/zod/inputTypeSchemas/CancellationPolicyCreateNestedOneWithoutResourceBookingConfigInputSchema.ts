import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyCreateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema } from './CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema } from './CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';

export const CancellationPolicyCreateNestedOneWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.CancellationPolicyCreateNestedOneWithoutResourceBookingConfigInput> = z.object({
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutResourceBookingConfigInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CancellationPolicyCreateOrConnectWithoutResourceBookingConfigInputSchema).optional(),
  connect: z.lazy(() => CancellationPolicyWhereUniqueInputSchema).optional()
}).strict();

export default CancellationPolicyCreateNestedOneWithoutResourceBookingConfigInputSchema;
