import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';
import { UiTemplateUpdateWithoutMerchantInputSchema } from './UiTemplateUpdateWithoutMerchantInputSchema';
import { UiTemplateUncheckedUpdateWithoutMerchantInputSchema } from './UiTemplateUncheckedUpdateWithoutMerchantInputSchema';

export const UiTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.UiTemplateUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => UiTemplateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UiTemplateUpdateWithoutMerchantInputSchema),z.lazy(() => UiTemplateUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default UiTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema;
