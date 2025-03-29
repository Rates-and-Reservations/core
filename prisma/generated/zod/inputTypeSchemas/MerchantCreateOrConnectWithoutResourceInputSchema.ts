import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutResourceInputSchema } from './MerchantCreateWithoutResourceInputSchema';
import { MerchantUncheckedCreateWithoutResourceInputSchema } from './MerchantUncheckedCreateWithoutResourceInputSchema';

export const MerchantCreateOrConnectWithoutResourceInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutResourceInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutResourceInputSchema;
