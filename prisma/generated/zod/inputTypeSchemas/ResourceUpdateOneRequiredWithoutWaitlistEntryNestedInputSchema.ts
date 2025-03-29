import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutWaitlistEntryInputSchema } from './ResourceCreateWithoutWaitlistEntryInputSchema';
import { ResourceUncheckedCreateWithoutWaitlistEntryInputSchema } from './ResourceUncheckedCreateWithoutWaitlistEntryInputSchema';
import { ResourceCreateOrConnectWithoutWaitlistEntryInputSchema } from './ResourceCreateOrConnectWithoutWaitlistEntryInputSchema';
import { ResourceUpsertWithoutWaitlistEntryInputSchema } from './ResourceUpsertWithoutWaitlistEntryInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateToOneWithWhereWithoutWaitlistEntryInputSchema } from './ResourceUpdateToOneWithWhereWithoutWaitlistEntryInputSchema';
import { ResourceUpdateWithoutWaitlistEntryInputSchema } from './ResourceUpdateWithoutWaitlistEntryInputSchema';
import { ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema } from './ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema';

export const ResourceUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema: z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutWaitlistEntryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutWaitlistEntryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutWaitlistEntryInputSchema).optional(),
  upsert: z.lazy(() => ResourceUpsertWithoutWaitlistEntryInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ResourceUpdateToOneWithWhereWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutWaitlistEntryInputSchema) ]).optional(),
}).strict();

export default ResourceUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema;
