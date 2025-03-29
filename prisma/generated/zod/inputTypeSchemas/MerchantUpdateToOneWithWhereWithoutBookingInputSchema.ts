import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutBookingInputSchema } from './MerchantUpdateWithoutBookingInputSchema';
import { MerchantUncheckedUpdateWithoutBookingInputSchema } from './MerchantUncheckedUpdateWithoutBookingInputSchema';

export const MerchantUpdateToOneWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutBookingInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutBookingInputSchema;
