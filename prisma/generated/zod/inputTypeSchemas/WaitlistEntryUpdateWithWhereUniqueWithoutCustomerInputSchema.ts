import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithoutCustomerInputSchema } from './WaitlistEntryUpdateWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedUpdateWithoutCustomerInputSchema } from './WaitlistEntryUncheckedUpdateWithoutCustomerInputSchema';

export const WaitlistEntryUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WaitlistEntryUpdateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default WaitlistEntryUpdateWithWhereUniqueWithoutCustomerInputSchema;
