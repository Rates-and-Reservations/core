import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutBookingActivityLogInputSchema } from './MerchantUpdateWithoutBookingActivityLogInputSchema';
import { MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema } from './MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema';
import { MerchantCreateWithoutBookingActivityLogInputSchema } from './MerchantCreateWithoutBookingActivityLogInputSchema';
import { MerchantUncheckedCreateWithoutBookingActivityLogInputSchema } from './MerchantUncheckedCreateWithoutBookingActivityLogInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutBookingActivityLogInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingActivityLogInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutBookingActivityLogInputSchema;
