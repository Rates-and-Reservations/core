import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateWithoutTemplateInputSchema } from './ResourceUpdateWithoutTemplateInputSchema';
import { ResourceUncheckedUpdateWithoutTemplateInputSchema } from './ResourceUncheckedUpdateWithoutTemplateInputSchema';
import { ResourceCreateWithoutTemplateInputSchema } from './ResourceCreateWithoutTemplateInputSchema';
import { ResourceUncheckedCreateWithoutTemplateInputSchema } from './ResourceUncheckedCreateWithoutTemplateInputSchema';

export const ResourceUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.ResourceUpsertWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResourceUpdateWithoutTemplateInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceCreateWithoutTemplateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default ResourceUpsertWithWhereUniqueWithoutTemplateInputSchema;
