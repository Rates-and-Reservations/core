import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';
import { ResourceTemplateUpdateWithoutMerchantInputSchema } from './ResourceTemplateUpdateWithoutMerchantInputSchema';
import { ResourceTemplateUncheckedUpdateWithoutMerchantInputSchema } from './ResourceTemplateUncheckedUpdateWithoutMerchantInputSchema';

export const ResourceTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceTemplateUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceTemplateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResourceTemplateUpdateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema;
