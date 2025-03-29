import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateScalarWhereInputSchema } from './ResourceTemplateScalarWhereInputSchema';
import { ResourceTemplateUpdateManyMutationInputSchema } from './ResourceTemplateUpdateManyMutationInputSchema';
import { ResourceTemplateUncheckedUpdateManyWithoutMerchantInputSchema } from './ResourceTemplateUncheckedUpdateManyWithoutMerchantInputSchema';

export const ResourceTemplateUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceTemplateUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceTemplateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResourceTemplateUpdateManyMutationInputSchema),z.lazy(() => ResourceTemplateUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceTemplateUpdateManyWithWhereWithoutMerchantInputSchema;
