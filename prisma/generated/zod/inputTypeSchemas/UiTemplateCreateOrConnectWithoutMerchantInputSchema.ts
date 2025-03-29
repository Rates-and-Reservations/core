import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';
import { UiTemplateCreateWithoutMerchantInputSchema } from './UiTemplateCreateWithoutMerchantInputSchema';
import { UiTemplateUncheckedCreateWithoutMerchantInputSchema } from './UiTemplateUncheckedCreateWithoutMerchantInputSchema';

export const UiTemplateCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.UiTemplateCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => UiTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutMerchantInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default UiTemplateCreateOrConnectWithoutMerchantInputSchema;
