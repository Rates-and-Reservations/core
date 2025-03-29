import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutTemplateInputSchema } from './ResourceCreateWithoutTemplateInputSchema';
import { ResourceUncheckedCreateWithoutTemplateInputSchema } from './ResourceUncheckedCreateWithoutTemplateInputSchema';
import { ResourceCreateOrConnectWithoutTemplateInputSchema } from './ResourceCreateOrConnectWithoutTemplateInputSchema';
import { ResourceCreateManyTemplateInputEnvelopeSchema } from './ResourceCreateManyTemplateInputEnvelopeSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';

export const ResourceCreateNestedManyWithoutTemplateInputSchema: z.ZodType<Prisma.ResourceCreateNestedManyWithoutTemplateInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutTemplateInputSchema),z.lazy(() => ResourceCreateWithoutTemplateInputSchema).array(),z.lazy(() => ResourceUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => ResourceCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceCreateManyTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ResourceCreateNestedManyWithoutTemplateInputSchema;
