import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutWaitlistEntryInputSchema } from './CustomerUpdateWithoutWaitlistEntryInputSchema';
import { CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema } from './CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema';

export const CustomerUpdateToOneWithWhereWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutWaitlistEntryInput> = z.object({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema) ]),
}).strict();

export default CustomerUpdateToOneWithWhereWithoutWaitlistEntryInputSchema;
