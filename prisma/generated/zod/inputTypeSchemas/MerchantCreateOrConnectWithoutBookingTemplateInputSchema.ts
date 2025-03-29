import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutBookingTemplateInputSchema } from './MerchantCreateWithoutBookingTemplateInputSchema';
import { MerchantUncheckedCreateWithoutBookingTemplateInputSchema } from './MerchantUncheckedCreateWithoutBookingTemplateInputSchema';

export const MerchantCreateOrConnectWithoutBookingTemplateInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutBookingTemplateInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingTemplateInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutBookingTemplateInputSchema;
