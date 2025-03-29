import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogCreateManyMerchantInputSchema } from './AuditLogCreateManyMerchantInputSchema';

export const AuditLogCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.AuditLogCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuditLogCreateManyMerchantInputSchema),z.lazy(() => AuditLogCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AuditLogCreateManyMerchantInputEnvelopeSchema;
