import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallUpdateWithoutMerchantInputSchema } from './AppInstallUpdateWithoutMerchantInputSchema';
import { AppInstallUncheckedUpdateWithoutMerchantInputSchema } from './AppInstallUncheckedUpdateWithoutMerchantInputSchema';
import { AppInstallCreateWithoutMerchantInputSchema } from './AppInstallCreateWithoutMerchantInputSchema';
import { AppInstallUncheckedCreateWithoutMerchantInputSchema } from './AppInstallUncheckedCreateWithoutMerchantInputSchema';

export const AppInstallUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AppInstallUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppInstallWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppInstallUpdateWithoutMerchantInputSchema),z.lazy(() => AppInstallUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => AppInstallCreateWithoutMerchantInputSchema),z.lazy(() => AppInstallUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AppInstallUpsertWithWhereUniqueWithoutMerchantInputSchema;
