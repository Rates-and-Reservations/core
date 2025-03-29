import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutWaitlistEntryInputSchema } from './ResourceCreateWithoutWaitlistEntryInputSchema';
import { ResourceUncheckedCreateWithoutWaitlistEntryInputSchema } from './ResourceUncheckedCreateWithoutWaitlistEntryInputSchema';
import { ResourceCreateOrConnectWithoutWaitlistEntryInputSchema } from './ResourceCreateOrConnectWithoutWaitlistEntryInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';

export const ResourceCreateNestedOneWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutWaitlistEntryInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutWaitlistEntryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutWaitlistEntryInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional()
}).strict();

export default ResourceCreateNestedOneWithoutWaitlistEntryInputSchema;
