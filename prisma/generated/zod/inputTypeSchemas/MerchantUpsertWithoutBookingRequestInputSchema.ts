import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutBookingRequestInputSchema } from './MerchantUpdateWithoutBookingRequestInputSchema';
import { MerchantUncheckedUpdateWithoutBookingRequestInputSchema } from './MerchantUncheckedUpdateWithoutBookingRequestInputSchema';
import { MerchantCreateWithoutBookingRequestInputSchema } from './MerchantCreateWithoutBookingRequestInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutBookingRequestInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutBookingRequestInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutBookingRequestInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingRequestInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutBookingRequestInputSchema;
