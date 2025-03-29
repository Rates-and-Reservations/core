import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutBookingRequestFlowInputSchema } from './MerchantUpdateWithoutBookingRequestFlowInputSchema';
import { MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema';

export const MerchantUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutBookingRequestFlowInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema;
