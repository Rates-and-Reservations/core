import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutUiTemplateInputSchema } from './MerchantUpdateWithoutUiTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutUiTemplateInputSchema } from './MerchantUncheckedUpdateWithoutUiTemplateInputSchema';
import { MerchantCreateWithoutUiTemplateInputSchema } from './MerchantCreateWithoutUiTemplateInputSchema';
import { MerchantUncheckedCreateWithoutUiTemplateInputSchema } from './MerchantUncheckedCreateWithoutUiTemplateInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutUiTemplateInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutUiTemplateInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutUiTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutUiTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutUiTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutUiTemplateInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutUiTemplateInputSchema;
