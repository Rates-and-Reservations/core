import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema';
import { AppCreateWithoutMerchantInputSchema } from './AppCreateWithoutMerchantInputSchema';
import { AppUncheckedCreateWithoutMerchantInputSchema } from './AppUncheckedCreateWithoutMerchantInputSchema';

export const AppCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.AppCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => AppWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AppCreateWithoutMerchantInputSchema),z.lazy(() => AppUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AppCreateOrConnectWithoutMerchantInputSchema;
