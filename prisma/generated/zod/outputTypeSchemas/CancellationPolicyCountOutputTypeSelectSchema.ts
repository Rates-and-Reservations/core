import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CancellationPolicyCountOutputTypeSelectSchema: z.ZodType<Prisma.CancellationPolicyCountOutputTypeSelect> = z.object({
  ResourceBookingConfig: z.boolean().optional(),
}).strict();

export default CancellationPolicyCountOutputTypeSelectSchema;
