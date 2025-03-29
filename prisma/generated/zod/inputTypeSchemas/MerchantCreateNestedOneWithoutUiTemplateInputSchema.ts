import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutUiTemplateInputSchema } from './MerchantCreateWithoutUiTemplateInputSchema';
import { MerchantUncheckedCreateWithoutUiTemplateInputSchema } from './MerchantUncheckedCreateWithoutUiTemplateInputSchema';
import { MerchantCreateOrConnectWithoutUiTemplateInputSchema } from './MerchantCreateOrConnectWithoutUiTemplateInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutUiTemplateInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutUiTemplateInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutUiTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutUiTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutUiTemplateInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutUiTemplateInputSchema;
