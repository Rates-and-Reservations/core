import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutAuditLogInputSchema } from './MerchantUpdateWithoutAuditLogInputSchema';
import { MerchantUncheckedUpdateWithoutAuditLogInputSchema } from './MerchantUncheckedUpdateWithoutAuditLogInputSchema';

export const MerchantUpdateToOneWithWhereWithoutAuditLogInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutAuditLogInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutAuditLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAuditLogInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutAuditLogInputSchema;
