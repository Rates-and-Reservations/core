import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenCreateWithoutAppInputSchema } from './OAuthTokenCreateWithoutAppInputSchema';
import { OAuthTokenUncheckedCreateWithoutAppInputSchema } from './OAuthTokenUncheckedCreateWithoutAppInputSchema';

export const OAuthTokenCreateOrConnectWithoutAppInputSchema: z.ZodType<Prisma.OAuthTokenCreateOrConnectWithoutAppInput> = z.object({
  where: z.lazy(() => OAuthTokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutAppInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutAppInputSchema) ]),
}).strict();

export default OAuthTokenCreateOrConnectWithoutAppInputSchema;
