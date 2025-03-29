import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutAuditLogInputSchema } from './MerchantCreateWithoutAuditLogInputSchema';
import { MerchantUncheckedCreateWithoutAuditLogInputSchema } from './MerchantUncheckedCreateWithoutAuditLogInputSchema';

export const MerchantCreateOrConnectWithoutAuditLogInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutAuditLogInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAuditLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAuditLogInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutAuditLogInputSchema;
