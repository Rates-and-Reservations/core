import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallCreateWithoutMerchantInputSchema } from './AppInstallCreateWithoutMerchantInputSchema';
import { AppInstallUncheckedCreateWithoutMerchantInputSchema } from './AppInstallUncheckedCreateWithoutMerchantInputSchema';

export const AppInstallCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.AppInstallCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppInstallWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppInstallCreateWithoutMerchantInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AppInstallCreateOrConnectWithoutMerchantInputSchema;
