import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateWithoutMerchantInputSchema } from './AppCreateWithoutMerchantInputSchema';
import { AppUncheckedCreateWithoutMerchantInputSchema } from './AppUncheckedCreateWithoutMerchantInputSchema';
import { AppCreateOrConnectWithoutMerchantInputSchema } from './AppCreateOrConnectWithoutMerchantInputSchema';
import { AppUpsertWithWhereUniqueWithoutMerchantInputSchema } from './AppUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { AppCreateManyMerchantInputEnvelopeSchema } from './AppCreateManyMerchantInputEnvelopeSchema';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppUpdateWithWhereUniqueWithoutMerchantInputSchema } from './AppUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { AppUpdateManyWithWhereWithoutMerchantInputSchema } from './AppUpdateManyWithWhereWithoutMerchantInputSchema';
import { AppScalarWhereInputSchema } from './AppScalarWhereInputSchema';

export const AppUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.AppUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => AppCreateWithoutMerchantInputSchema),z.lazy(() => AppCreateWithoutMerchantInputSchema).array(),z.lazy(() => AppUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AppUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AppCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AppUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AppUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AppWhereUniqueInputSchema),z.lazy(() => AppWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AppUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => AppUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AppUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => AppUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AppScalarWhereInputSchema),z.lazy(() => AppScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AppUpdateManyWithoutMerchantNestedInputSchema;
