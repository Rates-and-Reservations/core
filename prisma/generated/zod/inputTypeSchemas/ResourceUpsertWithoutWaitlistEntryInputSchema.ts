import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceUpdateWithoutWaitlistEntryInputSchema } from './ResourceUpdateWithoutWaitlistEntryInputSchema';
import { ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema } from './ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema';
import { ResourceCreateWithoutWaitlistEntryInputSchema } from './ResourceCreateWithoutWaitlistEntryInputSchema';
import { ResourceUncheckedCreateWithoutWaitlistEntryInputSchema } from './ResourceUncheckedCreateWithoutWaitlistEntryInputSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceUpsertWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.ResourceUpsertWithoutWaitlistEntryInput> = z.object({
  update: z.union([ z.lazy(() => ResourceUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceCreateWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutWaitlistEntryInputSchema) ]),
  where: z.lazy(() => ResourceWhereInputSchema).optional()
}).strict();

export default ResourceUpsertWithoutWaitlistEntryInputSchema;
