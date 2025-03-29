import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutBookingTemplateInputSchema } from './MerchantUpdateWithoutBookingTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutBookingTemplateInputSchema } from './MerchantUncheckedUpdateWithoutBookingTemplateInputSchema';
import { MerchantCreateWithoutBookingTemplateInputSchema } from './MerchantCreateWithoutBookingTemplateInputSchema';
import { MerchantUncheckedCreateWithoutBookingTemplateInputSchema } from './MerchantUncheckedCreateWithoutBookingTemplateInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutBookingTemplateInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutBookingTemplateInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingTemplateInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutBookingTemplateInputSchema;
