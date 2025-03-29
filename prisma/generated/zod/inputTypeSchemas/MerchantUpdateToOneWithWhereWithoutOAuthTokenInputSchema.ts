import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutOAuthTokenInputSchema } from './MerchantUpdateWithoutOAuthTokenInputSchema';
import { MerchantUncheckedUpdateWithoutOAuthTokenInputSchema } from './MerchantUncheckedUpdateWithoutOAuthTokenInputSchema';

export const MerchantUpdateToOneWithWhereWithoutOAuthTokenInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutOAuthTokenInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutOAuthTokenInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutOAuthTokenInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutOAuthTokenInputSchema;
