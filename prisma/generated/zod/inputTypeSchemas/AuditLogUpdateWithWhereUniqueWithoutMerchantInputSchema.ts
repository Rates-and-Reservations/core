import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogUpdateWithoutMerchantInputSchema } from './AuditLogUpdateWithoutMerchantInputSchema';
import { AuditLogUncheckedUpdateWithoutMerchantInputSchema } from './AuditLogUncheckedUpdateWithoutMerchantInputSchema';

export const AuditLogUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuditLogUpdateWithoutMerchantInputSchema),z.lazy(() => AuditLogUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default AuditLogUpdateWithWhereUniqueWithoutMerchantInputSchema;
