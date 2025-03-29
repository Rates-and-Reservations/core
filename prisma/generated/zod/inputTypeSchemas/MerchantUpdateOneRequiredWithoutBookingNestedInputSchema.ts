import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingInputSchema } from './MerchantCreateWithoutBookingInputSchema';
import { MerchantUncheckedCreateWithoutBookingInputSchema } from './MerchantUncheckedCreateWithoutBookingInputSchema';
import { MerchantCreateOrConnectWithoutBookingInputSchema } from './MerchantCreateOrConnectWithoutBookingInputSchema';
import { MerchantUpsertWithoutBookingInputSchema } from './MerchantUpsertWithoutBookingInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutBookingInputSchema } from './MerchantUpdateToOneWithWhereWithoutBookingInputSchema';
import { MerchantUpdateWithoutBookingInputSchema } from './MerchantUpdateWithoutBookingInputSchema';
import { MerchantUncheckedUpdateWithoutBookingInputSchema } from './MerchantUncheckedUpdateWithoutBookingInputSchema';

export const MerchantUpdateOneRequiredWithoutBookingNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutBookingInputSchema),z.lazy(() => MerchantUpdateWithoutBookingInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutBookingNestedInputSchema;
