import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateCreateWithoutMerchantInputSchema } from './ResourceTemplateCreateWithoutMerchantInputSchema';
import { ResourceTemplateUncheckedCreateWithoutMerchantInputSchema } from './ResourceTemplateUncheckedCreateWithoutMerchantInputSchema';
import { ResourceTemplateCreateOrConnectWithoutMerchantInputSchema } from './ResourceTemplateCreateOrConnectWithoutMerchantInputSchema';
import { ResourceTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema } from './ResourceTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { ResourceTemplateCreateManyMerchantInputEnvelopeSchema } from './ResourceTemplateCreateManyMerchantInputEnvelopeSchema';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';
import { ResourceTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema } from './ResourceTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { ResourceTemplateUpdateManyWithWhereWithoutMerchantInputSchema } from './ResourceTemplateUpdateManyWithWhereWithoutMerchantInputSchema';
import { ResourceTemplateScalarWhereInputSchema } from './ResourceTemplateScalarWhereInputSchema';

export const ResourceTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.ResourceTemplateUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateCreateWithoutMerchantInputSchema).array(),z.lazy(() => ResourceTemplateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceTemplateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResourceTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceTemplateCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResourceTemplateWhereUniqueInputSchema),z.lazy(() => ResourceTemplateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResourceTemplateWhereUniqueInputSchema),z.lazy(() => ResourceTemplateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResourceTemplateWhereUniqueInputSchema),z.lazy(() => ResourceTemplateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResourceTemplateWhereUniqueInputSchema),z.lazy(() => ResourceTemplateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResourceTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResourceTemplateUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResourceTemplateScalarWhereInputSchema),z.lazy(() => ResourceTemplateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ResourceTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema;
