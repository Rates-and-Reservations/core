import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenCreateWithoutMerchantInputSchema } from './OAuthTokenCreateWithoutMerchantInputSchema';
import { OAuthTokenUncheckedCreateWithoutMerchantInputSchema } from './OAuthTokenUncheckedCreateWithoutMerchantInputSchema';
import { OAuthTokenCreateOrConnectWithoutMerchantInputSchema } from './OAuthTokenCreateOrConnectWithoutMerchantInputSchema';
import { OAuthTokenCreateManyMerchantInputEnvelopeSchema } from './OAuthTokenCreateManyMerchantInputEnvelopeSchema';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';

export const OAuthTokenUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.OAuthTokenUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenCreateWithoutMerchantInputSchema).array(),z.lazy(() => OAuthTokenUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthTokenCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => OAuthTokenCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthTokenCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OAuthTokenUncheckedCreateNestedManyWithoutMerchantInputSchema;
