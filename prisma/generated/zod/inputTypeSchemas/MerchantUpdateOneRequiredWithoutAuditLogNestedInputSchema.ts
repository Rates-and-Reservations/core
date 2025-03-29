import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAuditLogInputSchema } from './MerchantCreateWithoutAuditLogInputSchema';
import { MerchantUncheckedCreateWithoutAuditLogInputSchema } from './MerchantUncheckedCreateWithoutAuditLogInputSchema';
import { MerchantCreateOrConnectWithoutAuditLogInputSchema } from './MerchantCreateOrConnectWithoutAuditLogInputSchema';
import { MerchantUpsertWithoutAuditLogInputSchema } from './MerchantUpsertWithoutAuditLogInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutAuditLogInputSchema } from './MerchantUpdateToOneWithWhereWithoutAuditLogInputSchema';
import { MerchantUpdateWithoutAuditLogInputSchema } from './MerchantUpdateWithoutAuditLogInputSchema';
import { MerchantUncheckedUpdateWithoutAuditLogInputSchema } from './MerchantUncheckedUpdateWithoutAuditLogInputSchema';

export const MerchantUpdateOneRequiredWithoutAuditLogNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutAuditLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAuditLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAuditLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAuditLogInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutAuditLogInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutAuditLogInputSchema),z.lazy(() => MerchantUpdateWithoutAuditLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAuditLogInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutAuditLogNestedInputSchema;
