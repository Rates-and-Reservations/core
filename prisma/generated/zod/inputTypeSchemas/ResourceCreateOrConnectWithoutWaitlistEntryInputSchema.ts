import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceCreateWithoutWaitlistEntryInputSchema } from './ResourceCreateWithoutWaitlistEntryInputSchema';
import { ResourceUncheckedCreateWithoutWaitlistEntryInputSchema } from './ResourceUncheckedCreateWithoutWaitlistEntryInputSchema';

export const ResourceCreateOrConnectWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutWaitlistEntryInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceCreateWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutWaitlistEntryInputSchema) ]),
}).strict();

export default ResourceCreateOrConnectWithoutWaitlistEntryInputSchema;
