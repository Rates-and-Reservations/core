import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';
import { ResourceTemplateCreateWithoutResourceInputSchema } from './ResourceTemplateCreateWithoutResourceInputSchema';
import { ResourceTemplateUncheckedCreateWithoutResourceInputSchema } from './ResourceTemplateUncheckedCreateWithoutResourceInputSchema';

export const ResourceTemplateCreateOrConnectWithoutResourceInputSchema: z.ZodType<Prisma.ResourceTemplateCreateOrConnectWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceTemplateCreateOrConnectWithoutResourceInputSchema;
