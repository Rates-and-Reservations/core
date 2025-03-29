import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutAuditLogInputSchema } from './MerchantUpdateWithoutAuditLogInputSchema';
import { MerchantUncheckedUpdateWithoutAuditLogInputSchema } from './MerchantUncheckedUpdateWithoutAuditLogInputSchema';
import { MerchantCreateWithoutAuditLogInputSchema } from './MerchantCreateWithoutAuditLogInputSchema';
import { MerchantUncheckedCreateWithoutAuditLogInputSchema } from './MerchantUncheckedCreateWithoutAuditLogInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutAuditLogInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutAuditLogInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutAuditLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAuditLogInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAuditLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAuditLogInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutAuditLogInputSchema;
