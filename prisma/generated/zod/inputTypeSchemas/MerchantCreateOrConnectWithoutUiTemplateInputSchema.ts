import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutUiTemplateInputSchema } from './MerchantCreateWithoutUiTemplateInputSchema';
import { MerchantUncheckedCreateWithoutUiTemplateInputSchema } from './MerchantUncheckedCreateWithoutUiTemplateInputSchema';

export const MerchantCreateOrConnectWithoutUiTemplateInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutUiTemplateInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutUiTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutUiTemplateInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutUiTemplateInputSchema;
