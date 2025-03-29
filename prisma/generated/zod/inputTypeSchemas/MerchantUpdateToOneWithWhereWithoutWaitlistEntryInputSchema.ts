import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutWaitlistEntryInputSchema } from './MerchantUpdateWithoutWaitlistEntryInputSchema';
import { MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema } from './MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema';

export const MerchantUpdateToOneWithWhereWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutWaitlistEntryInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutWaitlistEntryInputSchema;
