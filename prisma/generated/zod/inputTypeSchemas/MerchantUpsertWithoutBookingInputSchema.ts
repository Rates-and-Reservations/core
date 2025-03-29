import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutBookingInputSchema } from './MerchantUpdateWithoutBookingInputSchema';
import { MerchantUncheckedUpdateWithoutBookingInputSchema } from './MerchantUncheckedUpdateWithoutBookingInputSchema';
import { MerchantCreateWithoutBookingInputSchema } from './MerchantCreateWithoutBookingInputSchema';
import { MerchantUncheckedCreateWithoutBookingInputSchema } from './MerchantUncheckedCreateWithoutBookingInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutBookingInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutBookingInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutBookingInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutBookingInputSchema;
