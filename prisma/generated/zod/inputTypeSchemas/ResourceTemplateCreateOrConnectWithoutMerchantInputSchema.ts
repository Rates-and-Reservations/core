import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';
import { ResourceTemplateCreateWithoutMerchantInputSchema } from './ResourceTemplateCreateWithoutMerchantInputSchema';
import { ResourceTemplateUncheckedCreateWithoutMerchantInputSchema } from './ResourceTemplateUncheckedCreateWithoutMerchantInputSchema';

export const ResourceTemplateCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceTemplateCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceTemplateCreateOrConnectWithoutMerchantInputSchema;
