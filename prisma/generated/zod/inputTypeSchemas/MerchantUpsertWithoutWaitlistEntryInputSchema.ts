import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutWaitlistEntryInputSchema } from './MerchantUpdateWithoutWaitlistEntryInputSchema';
import { MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema } from './MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema';
import { MerchantCreateWithoutWaitlistEntryInputSchema } from './MerchantCreateWithoutWaitlistEntryInputSchema';
import { MerchantUncheckedCreateWithoutWaitlistEntryInputSchema } from './MerchantUncheckedCreateWithoutWaitlistEntryInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutWaitlistEntryInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutWaitlistEntryInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWaitlistEntryInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutWaitlistEntryInputSchema;
