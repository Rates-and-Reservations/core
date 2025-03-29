import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenUpdateWithoutAppInputSchema } from './OAuthTokenUpdateWithoutAppInputSchema';
import { OAuthTokenUncheckedUpdateWithoutAppInputSchema } from './OAuthTokenUncheckedUpdateWithoutAppInputSchema';

export const OAuthTokenUpdateWithWhereUniqueWithoutAppInputSchema: z.ZodType<Prisma.OAuthTokenUpdateWithWhereUniqueWithoutAppInput> = z.object({
  where: z.lazy(() => OAuthTokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OAuthTokenUpdateWithoutAppInputSchema),z.lazy(() => OAuthTokenUncheckedUpdateWithoutAppInputSchema) ]),
}).strict();

export default OAuthTokenUpdateWithWhereUniqueWithoutAppInputSchema;
