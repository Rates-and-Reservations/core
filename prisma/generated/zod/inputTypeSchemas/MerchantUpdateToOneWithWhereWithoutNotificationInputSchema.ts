import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutNotificationInputSchema } from './MerchantUpdateWithoutNotificationInputSchema';
import { MerchantUncheckedUpdateWithoutNotificationInputSchema } from './MerchantUncheckedUpdateWithoutNotificationInputSchema';

export const MerchantUpdateToOneWithWhereWithoutNotificationInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutNotificationInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutNotificationInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutNotificationInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutNotificationInputSchema;
