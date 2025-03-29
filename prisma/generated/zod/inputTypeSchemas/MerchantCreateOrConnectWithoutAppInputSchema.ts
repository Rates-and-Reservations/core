import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutAppInputSchema } from './MerchantCreateWithoutAppInputSchema';
import { MerchantUncheckedCreateWithoutAppInputSchema } from './MerchantUncheckedCreateWithoutAppInputSchema';

export const MerchantCreateOrConnectWithoutAppInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutAppInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutAppInputSchema;
