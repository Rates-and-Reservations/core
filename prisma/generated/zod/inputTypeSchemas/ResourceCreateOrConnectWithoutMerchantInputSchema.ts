import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceCreateWithoutMerchantInputSchema } from './ResourceCreateWithoutMerchantInputSchema';
import { ResourceUncheckedCreateWithoutMerchantInputSchema } from './ResourceUncheckedCreateWithoutMerchantInputSchema';

export const ResourceCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceCreateWithoutMerchantInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceCreateOrConnectWithoutMerchantInputSchema;
