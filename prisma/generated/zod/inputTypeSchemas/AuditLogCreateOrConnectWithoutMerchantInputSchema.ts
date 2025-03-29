import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogCreateWithoutMerchantInputSchema } from './AuditLogCreateWithoutMerchantInputSchema';
import { AuditLogUncheckedCreateWithoutMerchantInputSchema } from './AuditLogUncheckedCreateWithoutMerchantInputSchema';

export const AuditLogCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.AuditLogCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuditLogCreateWithoutMerchantInputSchema),z.lazy(() => AuditLogUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AuditLogCreateOrConnectWithoutMerchantInputSchema;
