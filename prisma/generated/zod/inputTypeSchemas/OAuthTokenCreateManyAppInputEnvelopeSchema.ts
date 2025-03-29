import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenCreateManyAppInputSchema } from './OAuthTokenCreateManyAppInputSchema';

export const OAuthTokenCreateManyAppInputEnvelopeSchema: z.ZodType<Prisma.OAuthTokenCreateManyAppInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OAuthTokenCreateManyAppInputSchema),z.lazy(() => OAuthTokenCreateManyAppInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OAuthTokenCreateManyAppInputEnvelopeSchema;
