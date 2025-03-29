import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { ResourceUpdateWithoutWaitlistEntryInputSchema } from './ResourceUpdateWithoutWaitlistEntryInputSchema';
import { ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema } from './ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema';

export const ResourceUpdateToOneWithWhereWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutWaitlistEntryInput> = z.object({
  where: z.lazy(() => ResourceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ResourceUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema) ]),
}).strict();

export default ResourceUpdateToOneWithWhereWithoutWaitlistEntryInputSchema;
