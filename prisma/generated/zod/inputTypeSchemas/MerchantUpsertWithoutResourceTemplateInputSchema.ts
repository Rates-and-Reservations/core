import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutResourceTemplateInputSchema } from './MerchantUpdateWithoutResourceTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutResourceTemplateInputSchema } from './MerchantUncheckedUpdateWithoutResourceTemplateInputSchema';
import { MerchantCreateWithoutResourceTemplateInputSchema } from './MerchantCreateWithoutResourceTemplateInputSchema';
import { MerchantUncheckedCreateWithoutResourceTemplateInputSchema } from './MerchantUncheckedCreateWithoutResourceTemplateInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutResourceTemplateInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutResourceTemplateInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutResourceTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceTemplateInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutResourceTemplateInputSchema;
