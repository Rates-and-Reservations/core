import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppUpdateWithoutMerchantInputSchema } from './AppUpdateWithoutMerchantInputSchema';
import { AppUncheckedUpdateWithoutMerchantInputSchema } from './AppUncheckedUpdateWithoutMerchantInputSchema';

export const AppUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AppUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AppUpdateWithoutMerchantInputSchema),z.lazy(() => AppUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default AppUpdateWithWhereUniqueWithoutMerchantInputSchema;
