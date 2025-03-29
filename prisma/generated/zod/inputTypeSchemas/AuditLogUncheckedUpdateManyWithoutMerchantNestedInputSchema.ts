import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogCreateWithoutMerchantInputSchema } from './AuditLogCreateWithoutMerchantInputSchema';
import { AuditLogUncheckedCreateWithoutMerchantInputSchema } from './AuditLogUncheckedCreateWithoutMerchantInputSchema';
import { AuditLogCreateOrConnectWithoutMerchantInputSchema } from './AuditLogCreateOrConnectWithoutMerchantInputSchema';
import { AuditLogUpsertWithWhereUniqueWithoutMerchantInputSchema } from './AuditLogUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { AuditLogCreateManyMerchantInputEnvelopeSchema } from './AuditLogCreateManyMerchantInputEnvelopeSchema';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogUpdateWithWhereUniqueWithoutMerchantInputSchema } from './AuditLogUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { AuditLogUpdateManyWithWhereWithoutMerchantInputSchema } from './AuditLogUpdateManyWithWhereWithoutMerchantInputSchema';
import { AuditLogScalarWhereInputSchema } from './AuditLogScalarWhereInputSchema';

export const AuditLogUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.AuditLogUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuditLogCreateWithoutMerchantInputSchema),z.lazy(() => AuditLogCreateWithoutMerchantInputSchema).array(),z.lazy(() => AuditLogUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AuditLogUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditLogCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AuditLogCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema),z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema),z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema),z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema),z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuditLogUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => AuditLogUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuditLogScalarWhereInputSchema),z.lazy(() => AuditLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AuditLogUncheckedUpdateManyWithoutMerchantNestedInputSchema;
