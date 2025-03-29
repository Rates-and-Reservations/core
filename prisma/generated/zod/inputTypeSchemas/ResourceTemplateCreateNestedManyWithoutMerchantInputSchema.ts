import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateCreateWithoutMerchantInputSchema } from './ResourceTemplateCreateWithoutMerchantInputSchema';
import { ResourceTemplateUncheckedCreateWithoutMerchantInputSchema } from './ResourceTemplateUncheckedCreateWithoutMerchantInputSchema';
import { ResourceTemplateCreateOrConnectWithoutMerchantInputSchema } from './ResourceTemplateCreateOrConnectWithoutMerchantInputSchema';
import { ResourceTemplateCreateManyMerchantInputEnvelopeSchema } from './ResourceTemplateCreateManyMerchantInputEnvelopeSchema';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';

export const ResourceTemplateCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceTemplateCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateCreateWithoutMerchantInputSchema).array(),z.lazy(() => ResourceTemplateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceTemplateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceTemplateCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResourceTemplateWhereUniqueInputSchema),z.lazy(() => ResourceTemplateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ResourceTemplateCreateNestedManyWithoutMerchantInputSchema;
