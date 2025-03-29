import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutResourceTemplateInputSchema } from './MerchantCreateWithoutResourceTemplateInputSchema';
import { MerchantUncheckedCreateWithoutResourceTemplateInputSchema } from './MerchantUncheckedCreateWithoutResourceTemplateInputSchema';
import { MerchantCreateOrConnectWithoutResourceTemplateInputSchema } from './MerchantCreateOrConnectWithoutResourceTemplateInputSchema';
import { MerchantUpsertWithoutResourceTemplateInputSchema } from './MerchantUpsertWithoutResourceTemplateInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutResourceTemplateInputSchema } from './MerchantUpdateToOneWithWhereWithoutResourceTemplateInputSchema';
import { MerchantUpdateWithoutResourceTemplateInputSchema } from './MerchantUpdateWithoutResourceTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutResourceTemplateInputSchema } from './MerchantUncheckedUpdateWithoutResourceTemplateInputSchema';

export const MerchantUpdateOneWithoutResourceTemplateNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneWithoutResourceTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutResourceTemplateInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutResourceTemplateInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUpdateWithoutResourceTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutResourceTemplateInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneWithoutResourceTemplateNestedInputSchema;
