import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutResourceTemplateInputSchema } from './MerchantUpdateWithoutResourceTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutResourceTemplateInputSchema } from './MerchantUncheckedUpdateWithoutResourceTemplateInputSchema';

export const MerchantUpdateToOneWithWhereWithoutResourceTemplateInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutResourceTemplateInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutResourceTemplateInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutResourceTemplateInputSchema;
