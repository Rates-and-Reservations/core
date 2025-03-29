import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutResourceInputSchema } from './MerchantUpdateWithoutResourceInputSchema';
import { MerchantUncheckedUpdateWithoutResourceInputSchema } from './MerchantUncheckedUpdateWithoutResourceInputSchema';

export const MerchantUpdateToOneWithWhereWithoutResourceInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutResourceInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutResourceInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutResourceInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutResourceInputSchema;
