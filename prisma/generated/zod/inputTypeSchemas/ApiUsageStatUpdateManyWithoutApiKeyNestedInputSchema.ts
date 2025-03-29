import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatCreateWithoutApiKeyInputSchema } from './ApiUsageStatCreateWithoutApiKeyInputSchema';
import { ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema';
import { ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema } from './ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema';
import { ApiUsageStatUpsertWithWhereUniqueWithoutApiKeyInputSchema } from './ApiUsageStatUpsertWithWhereUniqueWithoutApiKeyInputSchema';
import { ApiUsageStatCreateManyApiKeyInputEnvelopeSchema } from './ApiUsageStatCreateManyApiKeyInputEnvelopeSchema';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatUpdateWithWhereUniqueWithoutApiKeyInputSchema } from './ApiUsageStatUpdateWithWhereUniqueWithoutApiKeyInputSchema';
import { ApiUsageStatUpdateManyWithWhereWithoutApiKeyInputSchema } from './ApiUsageStatUpdateManyWithWhereWithoutApiKeyInputSchema';
import { ApiUsageStatScalarWhereInputSchema } from './ApiUsageStatScalarWhereInputSchema';

export const ApiUsageStatUpdateManyWithoutApiKeyNestedInputSchema: z.ZodType<Prisma.ApiUsageStatUpdateManyWithoutApiKeyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatCreateWithoutApiKeyInputSchema).array(),z.lazy(() => ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApiUsageStatUpsertWithWhereUniqueWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUpsertWithWhereUniqueWithoutApiKeyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageStatCreateManyApiKeyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApiUsageStatUpdateWithWhereUniqueWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUpdateWithWhereUniqueWithoutApiKeyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApiUsageStatUpdateManyWithWhereWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUpdateManyWithWhereWithoutApiKeyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApiUsageStatScalarWhereInputSchema),z.lazy(() => ApiUsageStatScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageStatUpdateManyWithoutApiKeyNestedInputSchema;
