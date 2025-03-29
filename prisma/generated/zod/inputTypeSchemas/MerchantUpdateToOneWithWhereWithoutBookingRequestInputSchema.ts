import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutBookingRequestInputSchema } from './MerchantUpdateWithoutBookingRequestInputSchema';
import { MerchantUncheckedUpdateWithoutBookingRequestInputSchema } from './MerchantUncheckedUpdateWithoutBookingRequestInputSchema';

export const MerchantUpdateToOneWithWhereWithoutBookingRequestInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutBookingRequestInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingRequestInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutBookingRequestInputSchema;
