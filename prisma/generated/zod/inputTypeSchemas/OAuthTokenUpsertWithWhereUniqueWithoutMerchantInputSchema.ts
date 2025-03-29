import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenUpdateWithoutMerchantInputSchema } from './OAuthTokenUpdateWithoutMerchantInputSchema';
import { OAuthTokenUncheckedUpdateWithoutMerchantInputSchema } from './OAuthTokenUncheckedUpdateWithoutMerchantInputSchema';
import { OAuthTokenCreateWithoutMerchantInputSchema } from './OAuthTokenCreateWithoutMerchantInputSchema';
import { OAuthTokenUncheckedCreateWithoutMerchantInputSchema } from './OAuthTokenUncheckedCreateWithoutMerchantInputSchema';

export const OAuthTokenUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.OAuthTokenUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => OAuthTokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OAuthTokenUpdateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default OAuthTokenUpsertWithWhereUniqueWithoutMerchantInputSchema;
