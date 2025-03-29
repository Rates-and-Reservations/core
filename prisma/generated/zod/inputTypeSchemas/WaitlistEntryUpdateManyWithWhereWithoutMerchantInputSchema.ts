import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryScalarWhereInputSchema } from './WaitlistEntryScalarWhereInputSchema';
import { WaitlistEntryUpdateManyMutationInputSchema } from './WaitlistEntryUpdateManyMutationInputSchema';
import { WaitlistEntryUncheckedUpdateManyWithoutMerchantInputSchema } from './WaitlistEntryUncheckedUpdateManyWithoutMerchantInputSchema';

export const WaitlistEntryUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => WaitlistEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WaitlistEntryUpdateManyMutationInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default WaitlistEntryUpdateManyWithWhereWithoutMerchantInputSchema;
