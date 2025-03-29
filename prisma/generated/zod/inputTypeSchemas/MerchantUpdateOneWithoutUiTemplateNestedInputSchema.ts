import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutUiTemplateInputSchema } from './MerchantCreateWithoutUiTemplateInputSchema';
import { MerchantUncheckedCreateWithoutUiTemplateInputSchema } from './MerchantUncheckedCreateWithoutUiTemplateInputSchema';
import { MerchantCreateOrConnectWithoutUiTemplateInputSchema } from './MerchantCreateOrConnectWithoutUiTemplateInputSchema';
import { MerchantUpsertWithoutUiTemplateInputSchema } from './MerchantUpsertWithoutUiTemplateInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutUiTemplateInputSchema } from './MerchantUpdateToOneWithWhereWithoutUiTemplateInputSchema';
import { MerchantUpdateWithoutUiTemplateInputSchema } from './MerchantUpdateWithoutUiTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutUiTemplateInputSchema } from './MerchantUncheckedUpdateWithoutUiTemplateInputSchema';

export const MerchantUpdateOneWithoutUiTemplateNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneWithoutUiTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutUiTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutUiTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutUiTemplateInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutUiTemplateInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutUiTemplateInputSchema),z.lazy(() => MerchantUpdateWithoutUiTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutUiTemplateInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneWithoutUiTemplateNestedInputSchema;
