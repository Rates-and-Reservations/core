import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenUpdateWithoutMerchantInputSchema } from './OAuthTokenUpdateWithoutMerchantInputSchema';
import { OAuthTokenUncheckedUpdateWithoutMerchantInputSchema } from './OAuthTokenUncheckedUpdateWithoutMerchantInputSchema';

export const OAuthTokenUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.OAuthTokenUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => OAuthTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OAuthTokenUpdateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default OAuthTokenUpdateWithWhereUniqueWithoutMerchantInputSchema;
