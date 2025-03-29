import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutUiTemplateInputSchema } from './MerchantUpdateWithoutUiTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutUiTemplateInputSchema } from './MerchantUncheckedUpdateWithoutUiTemplateInputSchema';

export const MerchantUpdateToOneWithWhereWithoutUiTemplateInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutUiTemplateInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutUiTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutUiTemplateInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutUiTemplateInputSchema;
