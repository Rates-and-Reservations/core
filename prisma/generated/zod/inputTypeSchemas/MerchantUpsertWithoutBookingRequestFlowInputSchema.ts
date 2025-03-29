import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutBookingRequestFlowInputSchema } from './MerchantUpdateWithoutBookingRequestFlowInputSchema';
import { MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema';
import { MerchantCreateWithoutBookingRequestFlowInputSchema } from './MerchantCreateWithoutBookingRequestFlowInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutBookingRequestFlowInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutBookingRequestFlowInputSchema;
