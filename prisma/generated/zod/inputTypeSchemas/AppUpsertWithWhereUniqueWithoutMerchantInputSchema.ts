import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppUpdateWithoutMerchantInputSchema } from './AppUpdateWithoutMerchantInputSchema';
import { AppUncheckedUpdateWithoutMerchantInputSchema } from './AppUncheckedUpdateWithoutMerchantInputSchema';
import { AppCreateWithoutMerchantInputSchema } from './AppCreateWithoutMerchantInputSchema';
import { AppUncheckedCreateWithoutMerchantInputSchema } from './AppUncheckedCreateWithoutMerchantInputSchema';

export const AppUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AppUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AppUpdateWithoutMerchantInputSchema),z.lazy(() => AppUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => AppCreateWithoutMerchantInputSchema),z.lazy(() => AppUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AppUpsertWithWhereUniqueWithoutMerchantInputSchema;
