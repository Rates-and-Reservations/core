import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateCreateWithoutResourceInputSchema } from './ResourceTemplateCreateWithoutResourceInputSchema';
import { ResourceTemplateUncheckedCreateWithoutResourceInputSchema } from './ResourceTemplateUncheckedCreateWithoutResourceInputSchema';
import { ResourceTemplateCreateOrConnectWithoutResourceInputSchema } from './ResourceTemplateCreateOrConnectWithoutResourceInputSchema';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';

export const ResourceTemplateCreateNestedOneWithoutResourceInputSchema: z.ZodType<Prisma.ResourceTemplateCreateNestedOneWithoutResourceInput> = z.object({
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutResourceInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutResourceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceTemplateCreateOrConnectWithoutResourceInputSchema).optional(),
  connect: z.lazy(() => ResourceTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ResourceTemplateCreateNestedOneWithoutResourceInputSchema;
