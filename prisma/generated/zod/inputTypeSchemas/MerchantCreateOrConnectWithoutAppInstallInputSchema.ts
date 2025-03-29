import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutAppInstallInputSchema } from './MerchantCreateWithoutAppInstallInputSchema';
import { MerchantUncheckedCreateWithoutAppInstallInputSchema } from './MerchantUncheckedCreateWithoutAppInstallInputSchema';

export const MerchantCreateOrConnectWithoutAppInstallInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutAppInstallInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInstallInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInstallInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutAppInstallInputSchema;
