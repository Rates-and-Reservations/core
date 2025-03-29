import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenUpdateWithoutAppInputSchema } from './OAuthTokenUpdateWithoutAppInputSchema';
import { OAuthTokenUncheckedUpdateWithoutAppInputSchema } from './OAuthTokenUncheckedUpdateWithoutAppInputSchema';
import { OAuthTokenCreateWithoutAppInputSchema } from './OAuthTokenCreateWithoutAppInputSchema';
import { OAuthTokenUncheckedCreateWithoutAppInputSchema } from './OAuthTokenUncheckedCreateWithoutAppInputSchema';

export const OAuthTokenUpsertWithWhereUniqueWithoutAppInputSchema: z.ZodType<Prisma.OAuthTokenUpsertWithWhereUniqueWithoutAppInput> = z.object({
  where: z.lazy(() => OAuthTokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OAuthTokenUpdateWithoutAppInputSchema),z.lazy(() => OAuthTokenUncheckedUpdateWithoutAppInputSchema) ]),
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutAppInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutAppInputSchema) ]),
}).strict();

export default OAuthTokenUpsertWithWhereUniqueWithoutAppInputSchema;
