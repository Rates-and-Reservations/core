import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAppInstallInputSchema } from './MerchantCreateWithoutAppInstallInputSchema';
import { MerchantUncheckedCreateWithoutAppInstallInputSchema } from './MerchantUncheckedCreateWithoutAppInstallInputSchema';
import { MerchantCreateOrConnectWithoutAppInstallInputSchema } from './MerchantCreateOrConnectWithoutAppInstallInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutAppInstallInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutAppInstallInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInstallInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInstallInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAppInstallInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutAppInstallInputSchema;
