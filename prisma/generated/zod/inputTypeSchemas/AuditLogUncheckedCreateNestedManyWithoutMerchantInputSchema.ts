import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogCreateWithoutMerchantInputSchema } from './AuditLogCreateWithoutMerchantInputSchema';
import { AuditLogUncheckedCreateWithoutMerchantInputSchema } from './AuditLogUncheckedCreateWithoutMerchantInputSchema';
import { AuditLogCreateOrConnectWithoutMerchantInputSchema } from './AuditLogCreateOrConnectWithoutMerchantInputSchema';
import { AuditLogCreateManyMerchantInputEnvelopeSchema } from './AuditLogCreateManyMerchantInputEnvelopeSchema';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';

export const AuditLogUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.AuditLogUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => AuditLogCreateWithoutMerchantInputSchema),z.lazy(() => AuditLogCreateWithoutMerchantInputSchema).array(),z.lazy(() => AuditLogUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AuditLogUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditLogCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AuditLogCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema),z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AuditLogUncheckedCreateNestedManyWithoutMerchantInputSchema;
