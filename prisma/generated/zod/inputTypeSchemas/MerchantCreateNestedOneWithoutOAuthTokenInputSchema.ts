import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutOAuthTokenInputSchema } from './MerchantCreateWithoutOAuthTokenInputSchema';
import { MerchantUncheckedCreateWithoutOAuthTokenInputSchema } from './MerchantUncheckedCreateWithoutOAuthTokenInputSchema';
import { MerchantCreateOrConnectWithoutOAuthTokenInputSchema } from './MerchantCreateOrConnectWithoutOAuthTokenInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutOAuthTokenInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutOAuthTokenInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutOAuthTokenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutOAuthTokenInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutOAuthTokenInputSchema;
