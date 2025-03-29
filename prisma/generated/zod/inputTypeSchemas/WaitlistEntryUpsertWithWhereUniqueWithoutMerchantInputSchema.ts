import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithoutMerchantInputSchema } from './WaitlistEntryUpdateWithoutMerchantInputSchema';
import { WaitlistEntryUncheckedUpdateWithoutMerchantInputSchema } from './WaitlistEntryUncheckedUpdateWithoutMerchantInputSchema';
import { WaitlistEntryCreateWithoutMerchantInputSchema } from './WaitlistEntryCreateWithoutMerchantInputSchema';
import { WaitlistEntryUncheckedCreateWithoutMerchantInputSchema } from './WaitlistEntryUncheckedCreateWithoutMerchantInputSchema';

export const WaitlistEntryUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.WaitlistEntryUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WaitlistEntryUpdateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default WaitlistEntryUpsertWithWhereUniqueWithoutMerchantInputSchema;
