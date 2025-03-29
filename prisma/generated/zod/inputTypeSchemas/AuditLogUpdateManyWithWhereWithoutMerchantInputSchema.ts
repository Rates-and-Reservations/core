import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogScalarWhereInputSchema } from './AuditLogScalarWhereInputSchema';
import { AuditLogUpdateManyMutationInputSchema } from './AuditLogUpdateManyMutationInputSchema';
import { AuditLogUncheckedUpdateManyWithoutMerchantInputSchema } from './AuditLogUncheckedUpdateManyWithoutMerchantInputSchema';

export const AuditLogUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.AuditLogUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => AuditLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuditLogUpdateManyMutationInputSchema),z.lazy(() => AuditLogUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default AuditLogUpdateManyWithWhereWithoutMerchantInputSchema;
