import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAppInstallInputSchema } from './MerchantCreateWithoutAppInstallInputSchema';
import { MerchantUncheckedCreateWithoutAppInstallInputSchema } from './MerchantUncheckedCreateWithoutAppInstallInputSchema';
import { MerchantCreateOrConnectWithoutAppInstallInputSchema } from './MerchantCreateOrConnectWithoutAppInstallInputSchema';
import { MerchantUpsertWithoutAppInstallInputSchema } from './MerchantUpsertWithoutAppInstallInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutAppInstallInputSchema } from './MerchantUpdateToOneWithWhereWithoutAppInstallInputSchema';
import { MerchantUpdateWithoutAppInstallInputSchema } from './MerchantUpdateWithoutAppInstallInputSchema';
import { MerchantUncheckedUpdateWithoutAppInstallInputSchema } from './MerchantUncheckedUpdateWithoutAppInstallInputSchema';

export const MerchantUpdateOneRequiredWithoutAppInstallNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutAppInstallNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInstallInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInstallInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAppInstallInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutAppInstallInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutAppInstallInputSchema),z.lazy(() => MerchantUpdateWithoutAppInstallInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAppInstallInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutAppInstallNestedInputSchema;
