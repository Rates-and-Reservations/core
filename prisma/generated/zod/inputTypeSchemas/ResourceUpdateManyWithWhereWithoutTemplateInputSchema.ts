import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceScalarWhereInputSchema } from './ResourceScalarWhereInputSchema';
import { ResourceUpdateManyMutationInputSchema } from './ResourceUpdateManyMutationInputSchema';
import { ResourceUncheckedUpdateManyWithoutTemplateInputSchema } from './ResourceUncheckedUpdateManyWithoutTemplateInputSchema';

export const ResourceUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.ResourceUpdateManyWithWhereWithoutTemplateInput> = z.object({
  where: z.lazy(() => ResourceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResourceUpdateManyMutationInputSchema),z.lazy(() => ResourceUncheckedUpdateManyWithoutTemplateInputSchema) ]),
}).strict();

export default ResourceUpdateManyWithWhereWithoutTemplateInputSchema;
