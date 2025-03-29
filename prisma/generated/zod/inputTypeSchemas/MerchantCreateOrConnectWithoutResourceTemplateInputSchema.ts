import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutResourceTemplateInputSchema } from './MerchantCreateWithoutResourceTemplateInputSchema';
import { MerchantUncheckedCreateWithoutResourceTemplateInputSchema } from './MerchantUncheckedCreateWithoutResourceTemplateInputSchema';

export const MerchantCreateOrConnectWithoutResourceTemplateInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutResourceTemplateInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceTemplateInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutResourceTemplateInputSchema;
