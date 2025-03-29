import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereInputSchema } from './ResourceTemplateWhereInputSchema';
import { ResourceTemplateUpdateWithoutResourceInputSchema } from './ResourceTemplateUpdateWithoutResourceInputSchema';
import { ResourceTemplateUncheckedUpdateWithoutResourceInputSchema } from './ResourceTemplateUncheckedUpdateWithoutResourceInputSchema';

export const ResourceTemplateUpdateToOneWithWhereWithoutResourceInputSchema: z.ZodType<Prisma.ResourceTemplateUpdateToOneWithWhereWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ResourceTemplateUpdateWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUncheckedUpdateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceTemplateUpdateToOneWithWhereWithoutResourceInputSchema;
