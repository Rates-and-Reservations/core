import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceTemplateWhereUniqueInputSchema } from './ResourceTemplateWhereUniqueInputSchema';
import { ResourceTemplateUpdateWithoutMerchantInputSchema } from './ResourceTemplateUpdateWithoutMerchantInputSchema';
import { ResourceTemplateUncheckedUpdateWithoutMerchantInputSchema } from './ResourceTemplateUncheckedUpdateWithoutMerchantInputSchema';
import { ResourceTemplateCreateWithoutMerchantInputSchema } from './ResourceTemplateCreateWithoutMerchantInputSchema';
import { ResourceTemplateUncheckedCreateWithoutMerchantInputSchema } from './ResourceTemplateUncheckedCreateWithoutMerchantInputSchema';

export const ResourceTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceTemplateUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceTemplateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResourceTemplateUpdateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceTemplateCreateWithoutMerchantInputSchema),z.lazy(() => ResourceTemplateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema;
