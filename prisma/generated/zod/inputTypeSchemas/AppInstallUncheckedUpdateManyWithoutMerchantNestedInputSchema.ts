import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateWithoutMerchantInputSchema } from './AppInstallCreateWithoutMerchantInputSchema';
import { AppInstallUncheckedCreateWithoutMerchantInputSchema } from './AppInstallUncheckedCreateWithoutMerchantInputSchema';
import { AppInstallCreateOrConnectWithoutMerchantInputSchema } from './AppInstallCreateOrConnectWithoutMerchantInputSchema';
import { AppInstallUpsertWithWhereUniqueWithoutMerchantInputSchema } from './AppInstallUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { AppInstallCreateManyMerchantInputEnvelopeSchema } from './AppInstallCreateManyMerchantInputEnvelopeSchema';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallUpdateWithWhereUniqueWithoutMerchantInputSchema } from './AppInstallUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { AppInstallUpdateManyWithWhereWithoutMerchantInputSchema } from './AppInstallUpdateManyWithWhereWithoutMerchantInputSchema';
import { AppInstallScalarWhereInputSchema } from './AppInstallScalarWhereInputSchema';

export const AppInstallUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.AppInstallUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallCreateWithoutMerchantInputSchema),z.lazy(() => AppInstallCreateWithoutMerchantInputSchema).array(),z.lazy(() => AppInstallUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AppInstallCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppInstallUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AppInstallUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppInstallUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AppInstallUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppInstallUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => AppInstallUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppInstallScalarWhereInputSchema),z.lazy(() => AppInstallScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AppInstallUncheckedUpdateManyWithoutMerchantNestedInputSchema;
