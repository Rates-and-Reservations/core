import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutAppInstallInputSchema } from './MerchantUpdateWithoutAppInstallInputSchema';
import { MerchantUncheckedUpdateWithoutAppInstallInputSchema } from './MerchantUncheckedUpdateWithoutAppInstallInputSchema';
import { MerchantCreateWithoutAppInstallInputSchema } from './MerchantCreateWithoutAppInstallInputSchema';
import { MerchantUncheckedCreateWithoutAppInstallInputSchema } from './MerchantUncheckedCreateWithoutAppInstallInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutAppInstallInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutAppInstallInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutAppInstallInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAppInstallInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInstallInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInstallInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutAppInstallInputSchema;
