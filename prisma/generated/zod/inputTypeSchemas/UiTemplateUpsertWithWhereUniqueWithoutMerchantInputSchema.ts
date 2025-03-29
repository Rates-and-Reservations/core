import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';
import { UiTemplateUpdateWithoutMerchantInputSchema } from './UiTemplateUpdateWithoutMerchantInputSchema';
import { UiTemplateUncheckedUpdateWithoutMerchantInputSchema } from './UiTemplateUncheckedUpdateWithoutMerchantInputSchema';
import { UiTemplateCreateWithoutMerchantInputSchema } from './UiTemplateCreateWithoutMerchantInputSchema';
import { UiTemplateUncheckedCreateWithoutMerchantInputSchema } from './UiTemplateUncheckedCreateWithoutMerchantInputSchema';

export const UiTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.UiTemplateUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => UiTemplateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UiTemplateUpdateWithoutMerchantInputSchema),z.lazy(() => UiTemplateUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutMerchantInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default UiTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema;
