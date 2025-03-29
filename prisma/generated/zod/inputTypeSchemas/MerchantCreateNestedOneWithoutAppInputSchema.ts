import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAppInputSchema } from './MerchantCreateWithoutAppInputSchema';
import { MerchantUncheckedCreateWithoutAppInputSchema } from './MerchantUncheckedCreateWithoutAppInputSchema';
import { MerchantCreateOrConnectWithoutAppInputSchema } from './MerchantCreateOrConnectWithoutAppInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutAppInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutAppInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAppInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAppInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAppInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutAppInputSchema;
