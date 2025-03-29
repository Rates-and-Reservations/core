import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutAppInstallInputSchema } from './MerchantUpdateWithoutAppInstallInputSchema';
import { MerchantUncheckedUpdateWithoutAppInstallInputSchema } from './MerchantUncheckedUpdateWithoutAppInstallInputSchema';

export const MerchantUpdateToOneWithWhereWithoutAppInstallInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutAppInstallInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutAppInstallInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAppInstallInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutAppInstallInputSchema;
