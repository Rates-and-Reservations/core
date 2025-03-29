import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutApiKeyInputSchema } from './MerchantUpdateWithoutApiKeyInputSchema';
import { MerchantUncheckedUpdateWithoutApiKeyInputSchema } from './MerchantUncheckedUpdateWithoutApiKeyInputSchema';

export const MerchantUpdateToOneWithWhereWithoutApiKeyInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutApiKeyInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutApiKeyInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiKeyInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutApiKeyInputSchema;
