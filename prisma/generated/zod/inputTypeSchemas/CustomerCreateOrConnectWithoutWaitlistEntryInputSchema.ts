import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutWaitlistEntryInputSchema } from './CustomerCreateWithoutWaitlistEntryInputSchema';
import { CustomerUncheckedCreateWithoutWaitlistEntryInputSchema } from './CustomerUncheckedCreateWithoutWaitlistEntryInputSchema';

export const CustomerCreateOrConnectWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutWaitlistEntryInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutWaitlistEntryInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutWaitlistEntryInputSchema;
