import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateCreateWithoutResourceInputSchema } from './ResourceTemplateCreateWithoutResourceInputSchema';
import { ResourceTemplateUncheckedCreateWithoutResourceInputSchema } from './ResourceTemplateUncheckedCreateWithoutResourceInputSchema';
import { ResourceTemplateCreateOrConnectWithoutResourceInputSchema } from './ResourceTemplateCreateOrConnectWithoutResourceInputSchema';
import { ResourceTemplateUpsertWithoutResourceInputSchema } from './ResourceTemplateUpsertWithoutResourceInputSchema';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';
import { ResourceTemplateUpdateToOneWithWhereWithoutResourceInputSchema } from './ResourceTemplateUpdateToOneWithWhereWithoutResourceInputSchema';
import { ResourceTemplateUpdateWithoutResourceInputSchema } from './ResourceTemplateUpdateWithoutResourceInputSchema';
import { ResourceTemplateUncheckedUpdateWithoutResourceInputSchema } from './ResourceTemplateUncheckedUpdateWithoutResourceInputSchema';

export const ResourceTemplateUpdateOneRequiredWithoutResourceNestedInputSchema: z.ZodType<Prisma.ResourceTemplateUpdateOneRequiredWithoutResourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutResourceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceTemplateCreateOrConnectWithoutResourceInputSchema).optional(),
  upsert: z.lazy(() => ResourceTemplateUpsertWithoutResourceInputSchema).optional(),
  connect: z.lazy(() => ResourceTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ResourceTemplateUpdateToOneWithWhereWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUpdateWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUncheckedUpdateWithoutResourceInputSchema) ]).optional(),
}).strict();

export default ResourceTemplateUpdateOneRequiredWithoutResourceNestedInputSchema;
