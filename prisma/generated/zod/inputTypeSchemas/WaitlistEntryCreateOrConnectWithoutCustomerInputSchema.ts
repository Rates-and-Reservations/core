import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryCreateWithoutCustomerInputSchema } from './WaitlistEntryCreateWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedCreateWithoutCustomerInputSchema } from './WaitlistEntryUncheckedCreateWithoutCustomerInputSchema';

export const WaitlistEntryCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.WaitlistEntryCreateOrConnectWithoutCustomerInput> = z.object({
  where: z.lazy(() => WaitlistEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default WaitlistEntryCreateOrConnectWithoutCustomerInputSchema;
