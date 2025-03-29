import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateScalarWhereInputSchema } from './UiTemplateScalarWhereInputSchema';
import { UiTemplateUpdateManyMutationInputSchema } from './UiTemplateUpdateManyMutationInputSchema';
import { UiTemplateUncheckedUpdateManyWithoutMerchantInputSchema } from './UiTemplateUncheckedUpdateManyWithoutMerchantInputSchema';

export const UiTemplateUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.UiTemplateUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => UiTemplateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UiTemplateUpdateManyMutationInputSchema),z.lazy(() => UiTemplateUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default UiTemplateUpdateManyWithWhereWithoutMerchantInputSchema;
