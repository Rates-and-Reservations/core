import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutBookingTemplateInputSchema } from './MerchantUpdateWithoutBookingTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutBookingTemplateInputSchema } from './MerchantUncheckedUpdateWithoutBookingTemplateInputSchema';

export const MerchantUpdateToOneWithWhereWithoutBookingTemplateInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutBookingTemplateInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingTemplateInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutBookingTemplateInputSchema;
