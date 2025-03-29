import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogCreateWithoutApiKeyInputSchema } from './ApiUsageLogCreateWithoutApiKeyInputSchema';
import { ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema';
import { ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema } from './ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema';
import { ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInputSchema } from './ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInputSchema';
import { ApiUsageLogCreateManyApiKeyInputEnvelopeSchema } from './ApiUsageLogCreateManyApiKeyInputEnvelopeSchema';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInputSchema } from './ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInputSchema';
import { ApiUsageLogUpdateManyWithWhereWithoutApiKeyInputSchema } from './ApiUsageLogUpdateManyWithWhereWithoutApiKeyInputSchema';
import { ApiUsageLogScalarWhereInputSchema } from './ApiUsageLogScalarWhereInputSchema';

export const ApiUsageLogUpdateManyWithoutApiKeyNestedInputSchema: z.ZodType<Prisma.ApiUsageLogUpdateManyWithoutApiKeyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogCreateWithoutApiKeyInputSchema).array(),z.lazy(() => ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageLogCreateManyApiKeyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApiUsageLogUpdateManyWithWhereWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUpdateManyWithWhereWithoutApiKeyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApiUsageLogScalarWhereInputSchema),z.lazy(() => ApiUsageLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageLogUpdateManyWithoutApiKeyNestedInputSchema;
