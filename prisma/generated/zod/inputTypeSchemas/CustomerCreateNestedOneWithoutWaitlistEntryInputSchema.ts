import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutWaitlistEntryInputSchema } from './CustomerCreateWithoutWaitlistEntryInputSchema';
import { CustomerUncheckedCreateWithoutWaitlistEntryInputSchema } from './CustomerUncheckedCreateWithoutWaitlistEntryInputSchema';
import { CustomerCreateOrConnectWithoutWaitlistEntryInputSchema } from './CustomerCreateOrConnectWithoutWaitlistEntryInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutWaitlistEntryInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutWaitlistEntryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutWaitlistEntryInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutWaitlistEntryInputSchema;
