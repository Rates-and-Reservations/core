import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutAppInputSchema } from './MerchantUpdateWithoutAppInputSchema';
import { MerchantUncheckedUpdateWithoutAppInputSchema } from './MerchantUncheckedUpdateWithoutAppInputSchema';

export const MerchantUpdateToOneWithWhereWithoutAppInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutAppInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutAppInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAppInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutAppInputSchema;
