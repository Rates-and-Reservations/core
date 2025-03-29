import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingTemplateInputSchema } from './MerchantCreateWithoutBookingTemplateInputSchema';
import { MerchantUncheckedCreateWithoutBookingTemplateInputSchema } from './MerchantUncheckedCreateWithoutBookingTemplateInputSchema';
import { MerchantCreateOrConnectWithoutBookingTemplateInputSchema } from './MerchantCreateOrConnectWithoutBookingTemplateInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutBookingTemplateInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutBookingTemplateInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingTemplateInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutBookingTemplateInputSchema;
