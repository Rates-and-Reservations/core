import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutWaitlistEntryInputSchema } from './CustomerUpdateWithoutWaitlistEntryInputSchema';
import { CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema } from './CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema';
import { CustomerCreateWithoutWaitlistEntryInputSchema } from './CustomerCreateWithoutWaitlistEntryInputSchema';
import { CustomerUncheckedCreateWithoutWaitlistEntryInputSchema } from './CustomerUncheckedCreateWithoutWaitlistEntryInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutWaitlistEntryInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutWaitlistEntryInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutWaitlistEntryInputSchema;
