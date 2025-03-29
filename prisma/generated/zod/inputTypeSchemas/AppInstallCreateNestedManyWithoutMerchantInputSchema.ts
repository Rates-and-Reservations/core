import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallCreateWithoutMerchantInputSchema } from './AppInstallCreateWithoutMerchantInputSchema';
import { AppInstallUncheckedCreateWithoutMerchantInputSchema } from './AppInstallUncheckedCreateWithoutMerchantInputSchema';
import { AppInstallCreateOrConnectWithoutMerchantInputSchema } from './AppInstallCreateOrConnectWithoutMerchantInputSchema';
import { AppInstallCreateManyMerchantInputEnvelopeSchema } from './AppInstallCreateManyMerchantInputEnvelopeSchema';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';

export const AppInstallCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.AppInstallCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => AppInstallCreateWithoutMerchantInputSchema),z.lazy(() => AppInstallCreateWithoutMerchantInputSchema).array(),z.lazy(() => AppInstallUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AppInstallCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AppInstallCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AppInstallCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AppInstallWhereUniqueInputSchema),z.lazy(() => AppInstallWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AppInstallCreateNestedManyWithoutMerchantInputSchema;
