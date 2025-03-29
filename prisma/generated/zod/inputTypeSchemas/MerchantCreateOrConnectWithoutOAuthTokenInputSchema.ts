import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutOAuthTokenInputSchema } from './MerchantCreateWithoutOAuthTokenInputSchema';
import { MerchantUncheckedCreateWithoutOAuthTokenInputSchema } from './MerchantUncheckedCreateWithoutOAuthTokenInputSchema';

export const MerchantCreateOrConnectWithoutOAuthTokenInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutOAuthTokenInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutOAuthTokenInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutOAuthTokenInputSchema;
