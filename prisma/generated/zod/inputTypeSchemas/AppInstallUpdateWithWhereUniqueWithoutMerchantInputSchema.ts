import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppInstallWhereUniqueInputSchema } from './AppInstallWhereUniqueInputSchema';
import { AppInstallUpdateWithoutMerchantInputSchema } from './AppInstallUpdateWithoutMerchantInputSchema';
import { AppInstallUncheckedUpdateWithoutMerchantInputSchema } from './AppInstallUncheckedUpdateWithoutMerchantInputSchema';

export const AppInstallUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AppInstallUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppInstallWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppInstallUpdateWithoutMerchantInputSchema),z.lazy(() => AppInstallUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default AppInstallUpdateWithWhereUniqueWithoutMerchantInputSchema;
