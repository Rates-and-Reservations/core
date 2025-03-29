import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenCreateWithoutAppInputSchema } from './OAuthTokenCreateWithoutAppInputSchema';
import { OAuthTokenUncheckedCreateWithoutAppInputSchema } from './OAuthTokenUncheckedCreateWithoutAppInputSchema';
import { OAuthTokenCreateOrConnectWithoutAppInputSchema } from './OAuthTokenCreateOrConnectWithoutAppInputSchema';
import { OAuthTokenCreateManyAppInputEnvelopeSchema } from './OAuthTokenCreateManyAppInputEnvelopeSchema';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';

export const OAuthTokenCreateNestedManyWithoutAppInputSchema: z.ZodType<Prisma.OAuthTokenCreateNestedManyWithoutAppInput> = z.object({
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutAppInputSchema),z.lazy(() => OAuthTokenCreateWithoutAppInputSchema).array(),z.lazy(() => OAuthTokenUncheckedCreateWithoutAppInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutAppInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthTokenCreateOrConnectWithoutAppInputSchema),z.lazy(() => OAuthTokenCreateOrConnectWithoutAppInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthTokenCreateManyAppInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OAuthTokenCreateNestedManyWithoutAppInputSchema;
