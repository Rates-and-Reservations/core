import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryCreateWithoutMerchantInputSchema } from './WaitlistEntryCreateWithoutMerchantInputSchema';
import { WaitlistEntryUncheckedCreateWithoutMerchantInputSchema } from './WaitlistEntryUncheckedCreateWithoutMerchantInputSchema';

export const WaitlistEntryCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.WaitlistEntryCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default WaitlistEntryCreateOrConnectWithoutMerchantInputSchema;
