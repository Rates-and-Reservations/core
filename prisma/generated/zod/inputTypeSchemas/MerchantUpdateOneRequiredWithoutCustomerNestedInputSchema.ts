import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutCustomerInputSchema } from './MerchantCreateWithoutCustomerInputSchema';
import { MerchantUncheckedCreateWithoutCustomerInputSchema } from './MerchantUncheckedCreateWithoutCustomerInputSchema';
import { MerchantCreateOrConnectWithoutCustomerInputSchema } from './MerchantCreateOrConnectWithoutCustomerInputSchema';
import { MerchantUpsertWithoutCustomerInputSchema } from './MerchantUpsertWithoutCustomerInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutCustomerInputSchema } from './MerchantUpdateToOneWithWhereWithoutCustomerInputSchema';
import { MerchantUpdateWithoutCustomerInputSchema } from './MerchantUpdateWithoutCustomerInputSchema';
import { MerchantUncheckedUpdateWithoutCustomerInputSchema } from './MerchantUncheckedUpdateWithoutCustomerInputSchema';

export const MerchantUpdateOneRequiredWithoutCustomerNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutCustomerNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutCustomerInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCustomerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutCustomerInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutCustomerInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutCustomerInputSchema),z.lazy(() => MerchantUpdateWithoutCustomerInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutCustomerInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutCustomerNestedInputSchema;
