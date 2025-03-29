import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingActivityLogInputSchema } from './MerchantCreateWithoutBookingActivityLogInputSchema';
import { MerchantUncheckedCreateWithoutBookingActivityLogInputSchema } from './MerchantUncheckedCreateWithoutBookingActivityLogInputSchema';
import { MerchantCreateOrConnectWithoutBookingActivityLogInputSchema } from './MerchantCreateOrConnectWithoutBookingActivityLogInputSchema';
import { MerchantUpsertWithoutBookingActivityLogInputSchema } from './MerchantUpsertWithoutBookingActivityLogInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutBookingActivityLogInputSchema } from './MerchantUpdateToOneWithWhereWithoutBookingActivityLogInputSchema';
import { MerchantUpdateWithoutBookingActivityLogInputSchema } from './MerchantUpdateWithoutBookingActivityLogInputSchema';
import { MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema } from './MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema';

export const MerchantUpdateOneRequiredWithoutBookingActivityLogNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutBookingActivityLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingActivityLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingActivityLogInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutBookingActivityLogInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUpdateWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingActivityLogInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutBookingActivityLogNestedInputSchema;
