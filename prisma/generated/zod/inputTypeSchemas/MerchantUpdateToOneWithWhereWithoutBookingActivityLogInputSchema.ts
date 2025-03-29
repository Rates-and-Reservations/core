import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutBookingActivityLogInputSchema } from './MerchantUpdateWithoutBookingActivityLogInputSchema';
import { MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema } from './MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema';

export const MerchantUpdateToOneWithWhereWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutBookingActivityLogInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutBookingActivityLogInputSchema;
