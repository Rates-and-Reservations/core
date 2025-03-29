import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateUpdateWithoutResourceInputSchema } from './ResourceTemplateUpdateWithoutResourceInputSchema';
import { ResourceTemplateUncheckedUpdateWithoutResourceInputSchema } from './ResourceTemplateUncheckedUpdateWithoutResourceInputSchema';
import { ResourceTemplateCreateWithoutResourceInputSchema } from './ResourceTemplateCreateWithoutResourceInputSchema';
import { ResourceTemplateUncheckedCreateWithoutResourceInputSchema } from './ResourceTemplateUncheckedCreateWithoutResourceInputSchema';
import { ResourceTemplateWhereInputSchema } from './ResourceTemplateWhereInputSchema';

export const ResourceTemplateUpsertWithoutResourceInputSchema: z.ZodType<Prisma.ResourceTemplateUpsertWithoutResourceInput> = z.object({
  update: z.union([ z.lazy(() => ResourceTemplateUpdateWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUncheckedUpdateWithoutResourceInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutResourceInputSchema) ]),
  where: z.lazy(() => ResourceTemplateWhereInputSchema).optional()
}).strict();

export default ResourceTemplateUpsertWithoutResourceInputSchema;
