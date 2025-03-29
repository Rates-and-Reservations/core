import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAppInputSchema } from './MerchantCreateWithoutAppInputSchema';
import { MerchantUncheckedCreateWithoutAppInputSchema } from './MerchantUncheckedCreateWithoutAppInputSchema';
import { MerchantCreateOrConnectWithoutAppInputSchema } from './MerchantCreateOrConnectWithoutAppInputSchema';
import { MerchantUpsertWithoutAppInputSchema } from './MerchantUpsertWithoutAppInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutAppInputSchema } from './MerchantUpdateToOneWithWhereWithoutAppInputSchema';
import { MerchantUpdateWithoutAppInputSchema } from './MerchantUpdateWithoutAppInputSchema';
import { MerchantUncheckedUpdateWithoutAppInputSchema } from './MerchantUncheckedUpdateWithoutAppInputSchema';

export const MerchantUpdateOneRequiredWithoutAppNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutAppNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAppInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutAppInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutAppInputSchema),z.lazy(() => MerchantUpdateWithoutAppInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAppInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutAppNestedInputSchema;
