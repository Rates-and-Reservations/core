import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutOAuthTokenInputSchema } from './MerchantUpdateWithoutOAuthTokenInputSchema';
import { MerchantUncheckedUpdateWithoutOAuthTokenInputSchema } from './MerchantUncheckedUpdateWithoutOAuthTokenInputSchema';
import { MerchantCreateWithoutOAuthTokenInputSchema } from './MerchantCreateWithoutOAuthTokenInputSchema';
import { MerchantUncheckedCreateWithoutOAuthTokenInputSchema } from './MerchantUncheckedCreateWithoutOAuthTokenInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutOAuthTokenInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutOAuthTokenInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutOAuthTokenInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutOAuthTokenInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutOAuthTokenInputSchema;
