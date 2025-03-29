import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateCreateWithoutMerchantInputSchema } from './UiTemplateCreateWithoutMerchantInputSchema';
import { UiTemplateUncheckedCreateWithoutMerchantInputSchema } from './UiTemplateUncheckedCreateWithoutMerchantInputSchema';
import { UiTemplateCreateOrConnectWithoutMerchantInputSchema } from './UiTemplateCreateOrConnectWithoutMerchantInputSchema';
import { UiTemplateCreateManyMerchantInputEnvelopeSchema } from './UiTemplateCreateManyMerchantInputEnvelopeSchema';
import { UiTemplateWhereUniqueInputSchema } from './UiTemplateWhereUniqueInputSchema';

export const UiTemplateCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.UiTemplateCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => UiTemplateCreateWithoutMerchantInputSchema),z.lazy(() => UiTemplateCreateWithoutMerchantInputSchema).array(),z.lazy(() => UiTemplateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => UiTemplateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UiTemplateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => UiTemplateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UiTemplateCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UiTemplateWhereUniqueInputSchema),z.lazy(() => UiTemplateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UiTemplateCreateNestedManyWithoutMerchantInputSchema;
