import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenScalarWhereInputSchema } from './OAuthTokenScalarWhereInputSchema';
import { OAuthTokenUpdateManyMutationInputSchema } from './OAuthTokenUpdateManyMutationInputSchema';
import { OAuthTokenUncheckedUpdateManyWithoutAppInputSchema } from './OAuthTokenUncheckedUpdateManyWithoutAppInputSchema';

export const OAuthTokenUpdateManyWithWhereWithoutAppInputSchema: z.ZodType<Prisma.OAuthTokenUpdateManyWithWhereWithoutAppInput> = z.object({
  where: z.lazy(() => OAuthTokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OAuthTokenUpdateManyMutationInputSchema),z.lazy(() => OAuthTokenUncheckedUpdateManyWithoutAppInputSchema) ]),
}).strict();

export default OAuthTokenUpdateManyWithWhereWithoutAppInputSchema;
