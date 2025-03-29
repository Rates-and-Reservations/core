import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenCreateWithoutMerchantInputSchema } from './OAuthTokenCreateWithoutMerchantInputSchema';
import { OAuthTokenUncheckedCreateWithoutMerchantInputSchema } from './OAuthTokenUncheckedCreateWithoutMerchantInputSchema';

export const OAuthTokenCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.OAuthTokenCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => OAuthTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default OAuthTokenCreateOrConnectWithoutMerchantInputSchema;
