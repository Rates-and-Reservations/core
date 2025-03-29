import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutWaitlistEntryInputSchema } from './MerchantCreateWithoutWaitlistEntryInputSchema';
import { MerchantUncheckedCreateWithoutWaitlistEntryInputSchema } from './MerchantUncheckedCreateWithoutWaitlistEntryInputSchema';

export const MerchantCreateOrConnectWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutWaitlistEntryInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutWaitlistEntryInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutWaitlistEntryInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutWaitlistEntryInputSchema;
