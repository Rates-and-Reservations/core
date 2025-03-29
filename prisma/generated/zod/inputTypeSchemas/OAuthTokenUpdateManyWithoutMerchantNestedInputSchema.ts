import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenCreateWithoutMerchantInputSchema } from './OAuthTokenCreateWithoutMerchantInputSchema';
import { OAuthTokenUncheckedCreateWithoutMerchantInputSchema } from './OAuthTokenUncheckedCreateWithoutMerchantInputSchema';
import { OAuthTokenCreateOrConnectWithoutMerchantInputSchema } from './OAuthTokenCreateOrConnectWithoutMerchantInputSchema';
import { OAuthTokenUpsertWithWhereUniqueWithoutMerchantInputSchema } from './OAuthTokenUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { OAuthTokenCreateManyMerchantInputEnvelopeSchema } from './OAuthTokenCreateManyMerchantInputEnvelopeSchema';
import { OAuthTokenWhereUniqueInputSchema } from './OAuthTokenWhereUniqueInputSchema';
import { OAuthTokenUpdateWithWhereUniqueWithoutMerchantInputSchema } from './OAuthTokenUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { OAuthTokenUpdateManyWithWhereWithoutMerchantInputSchema } from './OAuthTokenUpdateManyWithWhereWithoutMerchantInputSchema';
import { OAuthTokenScalarWhereInputSchema } from './OAuthTokenScalarWhereInputSchema';

export const OAuthTokenUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.OAuthTokenUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => OAuthTokenCreateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenCreateWithoutMerchantInputSchema).array(),z.lazy(() => OAuthTokenUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OAuthTokenCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => OAuthTokenCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OAuthTokenUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OAuthTokenCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OAuthTokenWhereUniqueInputSchema),z.lazy(() => OAuthTokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OAuthTokenUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OAuthTokenUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => OAuthTokenUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OAuthTokenScalarWhereInputSchema),z.lazy(() => OAuthTokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OAuthTokenUpdateManyWithoutMerchantNestedInputSchema;
