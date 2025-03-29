import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithoutMerchantInputSchema } from './WaitlistEntryUpdateWithoutMerchantInputSchema';
import { WaitlistEntryUncheckedUpdateWithoutMerchantInputSchema } from './WaitlistEntryUncheckedUpdateWithoutMerchantInputSchema';

export const WaitlistEntryUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WaitlistEntryUpdateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default WaitlistEntryUpdateWithWhereUniqueWithoutMerchantInputSchema;
