import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutResourceTemplateInputSchema } from './MerchantCreateWithoutResourceTemplateInputSchema';
import { MerchantUncheckedCreateWithoutResourceTemplateInputSchema } from './MerchantUncheckedCreateWithoutResourceTemplateInputSchema';
import { MerchantCreateOrConnectWithoutResourceTemplateInputSchema } from './MerchantCreateOrConnectWithoutResourceTemplateInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutResourceTemplateInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutResourceTemplateInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutResourceTemplateInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutResourceTemplateInputSchema;
