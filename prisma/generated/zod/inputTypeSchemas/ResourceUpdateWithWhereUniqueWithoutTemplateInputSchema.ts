import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateWithoutTemplateInputSchema } from './ResourceUpdateWithoutTemplateInputSchema';
import { ResourceUncheckedUpdateWithoutTemplateInputSchema } from './ResourceUncheckedUpdateWithoutTemplateInputSchema';

export const ResourceUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.ResourceUpdateWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResourceUpdateWithoutTemplateInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutTemplateInputSchema) ]),
}).strict();

export default ResourceUpdateWithWhereUniqueWithoutTemplateInputSchema;
