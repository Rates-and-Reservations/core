import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenCreateWithoutAppInputSchema } from './OAuthTokenCreateWithoutAppInputSchema';
import { OAuthTokenUncheckedCreateWithoutAppInputSchema } from './OAuthTokenUncheckedCreateWithoutAppInputSchema';
import { OAuthTokenCreateOrConnectWithoutAppInputSchema } from './OAuthTokenCreateOrConnectWithoutAppInputSchema';
import { OAuthTokenUpsertWithWhereUniqueWithoutAppInputSchema } from './OAuthTokenUpsertWithWhereUniqueWithoutAppInputSchema';
import { OAuthTokenCreateManyAppInputEnvelopeSchema } from './OAuthTokenCreateManyAppInputEnvelopeSchema';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenUpdateWithWhereUniqueWithoutAppInputSchema } from './OAuthTokenUpdateWithWhereUniqueWithoutAppInputSchema';
import { OAuthTokenUpdateManyWithWhereWithoutAppInputSchema } from './OAuthTokenUpdateManyWithWhereWithoutAppInputSchema';
import { OAuthTokenScalarWhereInputSchema } from './OAuthTokenScalarWhereInputSchema';

export const OAuthTokenUpdateManyWithoutAppNestedInputSchema: z.ZodType<Prisma.OAuthTokenUpdateManyWithoutAppNestedInput> = z.object({
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutAppInputSchema),z.lazy(() => OAuthTokenCreateWithoutAppInputSchema).array(),z.lazy(() => OAuthTokenUncheckedCreateWithoutAppInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutAppInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthTokenCreateOrConnectWithoutAppInputSchema),z.lazy(() => OAuthTokenCreateOrConnectWithoutAppInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OAuthTokenUpsertWithWhereUniqueWithoutAppInputSchema),z.lazy(() => OAuthTokenUpsertWithWhereUniqueWithoutAppInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthTokenCreateManyAppInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OAuthTokenUpdateWithWhereUniqueWithoutAppInputSchema),z.lazy(() => OAuthTokenUpdateWithWhereUniqueWithoutAppInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OAuthTokenUpdateManyWithWhereWithoutAppInputSchema),z.lazy(() => OAuthTokenUpdateManyWithWhereWithoutAppInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OAuthTokenScalarWhereInputSchema),z.lazy(() => OAuthTokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OAuthTokenUpdateManyWithoutAppNestedInputSchema;
