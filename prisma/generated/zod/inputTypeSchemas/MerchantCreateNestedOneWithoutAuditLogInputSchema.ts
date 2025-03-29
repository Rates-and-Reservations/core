import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAuditLogInputSchema } from './MerchantCreateWithoutAuditLogInputSchema';
import { MerchantUncheckedCreateWithoutAuditLogInputSchema } from './MerchantUncheckedCreateWithoutAuditLogInputSchema';
import { MerchantCreateOrConnectWithoutAuditLogInputSchema } from './MerchantCreateOrConnectWithoutAuditLogInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutAuditLogInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutAuditLogInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAuditLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAuditLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAuditLogInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutAuditLogInputSchema;
