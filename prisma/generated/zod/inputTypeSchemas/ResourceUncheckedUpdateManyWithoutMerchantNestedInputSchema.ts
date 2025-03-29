import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutMerchantInputSchema } from './ResourceCreateWithoutMerchantInputSchema';
import { ResourceUncheckedCreateWithoutMerchantInputSchema } from './ResourceUncheckedCreateWithoutMerchantInputSchema';
import { ResourceCreateOrConnectWithoutMerchantInputSchema } from './ResourceCreateOrConnectWithoutMerchantInputSchema';
import { ResourceUpsertWithWhereUniqueWithoutMerchantInputSchema } from './ResourceUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { ResourceCreateManyMerchantInputEnvelopeSchema } from './ResourceCreateManyMerchantInputEnvelopeSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateWithWhereUniqueWithoutMerchantInputSchema } from './ResourceUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { ResourceUpdateManyWithWhereWithoutMerchantInputSchema } from './ResourceUpdateManyWithWhereWithoutMerchantInputSchema';
import { ResourceScalarWhereInputSchema } from './ResourceScalarWhereInputSchema';

export const ResourceUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.ResourceUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutMerchantInputSchema),z.lazy(() => ResourceCreateWithoutMerchantInputSchema).array(),z.lazy(() => ResourceUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ResourceCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResourceUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ResourceUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResourceUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ResourceUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResourceUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => ResourceUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResourceScalarWhereInputSchema),z.lazy(() => ResourceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ResourceUncheckedUpdateManyWithoutMerchantNestedInputSchema;
