import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogUpdateWithoutMerchantInputSchema } from './AuditLogUpdateWithoutMerchantInputSchema';
import { AuditLogUncheckedUpdateWithoutMerchantInputSchema } from './AuditLogUncheckedUpdateWithoutMerchantInputSchema';
import { AuditLogCreateWithoutMerchantInputSchema } from './AuditLogCreateWithoutMerchantInputSchema';
import { AuditLogUncheckedCreateWithoutMerchantInputSchema } from './AuditLogUncheckedCreateWithoutMerchantInputSchema';

export const AuditLogUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AuditLogUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuditLogUpdateWithoutMerchantInputSchema),z.lazy(() => AuditLogUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => AuditLogCreateWithoutMerchantInputSchema),z.lazy(() => AuditLogUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AuditLogUpsertWithWhereUniqueWithoutMerchantInputSchema;
