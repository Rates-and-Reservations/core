import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutTemplateInputSchema } from './ResourceCreateWithoutTemplateInputSchema';
import { ResourceUncheckedCreateWithoutTemplateInputSchema } from './ResourceUncheckedCreateWithoutTemplateInputSchema';
import { ResourceCreateOrConnectWithoutTemplateInputSchema } from './ResourceCreateOrConnectWithoutTemplateInputSchema';
import { ResourceUpsertWithWhereUniqueWithoutTemplateInputSchema } from './ResourceUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { ResourceCreateManyTemplateInputEnvelopeSchema } from './ResourceCreateManyTemplateInputEnvelopeSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateWithWhereUniqueWithoutTemplateInputSchema } from './ResourceUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { ResourceUpdateManyWithWhereWithoutTemplateInputSchema } from './ResourceUpdateManyWithWhereWithoutTemplateInputSchema';
import { ResourceScalarWhereInputSchema } from './ResourceScalarWhereInputSchema';

export const ResourceUncheckedUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.ResourceUncheckedUpdateManyWithoutTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutTemplateInputSchema),z.lazy(() => ResourceCreateWithoutTemplateInputSchema).array(),z.lazy(() => ResourceUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => ResourceCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResourceUpsertWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => ResourceUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResourceUpdateWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => ResourceUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResourceUpdateManyWithWhereWithoutTemplateInputSchema),z.lazy(() => ResourceUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResourceScalarWhereInputSchema),z.lazy(() => ResourceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ResourceUncheckedUpdateManyWithoutTemplateNestedInputSchema;
