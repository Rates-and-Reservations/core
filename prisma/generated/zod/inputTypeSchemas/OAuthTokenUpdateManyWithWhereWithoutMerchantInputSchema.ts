import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthTokenScalarWhereInputSchema } from './OAuthTokenScalarWhereInputSchema';
import { OAuthTokenUpdateManyMutationInputSchema } from './OAuthTokenUpdateManyMutationInputSchema';
import { OAuthTokenUncheckedUpdateManyWithoutMerchantInputSchema } from './OAuthTokenUncheckedUpdateManyWithoutMerchantInputSchema';

export const OAuthTokenUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.OAuthTokenUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => OAuthTokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OAuthTokenUpdateManyMutationInputSchema),z.lazy(() => OAuthTokenUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default OAuthTokenUpdateManyWithWhereWithoutMerchantInputSchema;
