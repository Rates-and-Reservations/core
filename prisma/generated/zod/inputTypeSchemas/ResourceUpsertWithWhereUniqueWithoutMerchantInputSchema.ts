import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateWithoutMerchantInputSchema } from './ResourceUpdateWithoutMerchantInputSchema';
import { ResourceUncheckedUpdateWithoutMerchantInputSchema } from './ResourceUncheckedUpdateWithoutMerchantInputSchema';
import { ResourceCreateWithoutMerchantInputSchema } from './ResourceCreateWithoutMerchantInputSchema';
import { ResourceUncheckedCreateWithoutMerchantInputSchema } from './ResourceUncheckedCreateWithoutMerchantInputSchema';

export const ResourceUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResourceUpdateWithoutMerchantInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceCreateWithoutMerchantInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceUpsertWithWhereUniqueWithoutMerchantInputSchema;
