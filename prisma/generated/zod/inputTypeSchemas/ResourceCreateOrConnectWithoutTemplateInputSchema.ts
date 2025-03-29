import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceCreateWithoutTemplateInputSchema } from './ResourceCreateWithoutTemplateInputSchema';
import { ResourceUncheckedCreateWithoutTemplateInputSchema } from './ResourceUncheckedCreateWithoutTemplateInputSchema';

export const ResourceCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutTemplateInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceCreateWithoutTemplateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default ResourceCreateOrConnectWithoutTemplateInputSchema;
