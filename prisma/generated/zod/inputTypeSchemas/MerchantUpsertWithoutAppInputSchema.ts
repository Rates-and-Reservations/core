import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutAppInputSchema } from './MerchantUpdateWithoutAppInputSchema';
import { MerchantUncheckedUpdateWithoutAppInputSchema } from './MerchantUncheckedUpdateWithoutAppInputSchema';
import { MerchantCreateWithoutAppInputSchema } from './MerchantCreateWithoutAppInputSchema';
import { MerchantUncheckedCreateWithoutAppInputSchema } from './MerchantUncheckedCreateWithoutAppInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutAppInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutAppInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutAppInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAppInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutAppInputSchema;
