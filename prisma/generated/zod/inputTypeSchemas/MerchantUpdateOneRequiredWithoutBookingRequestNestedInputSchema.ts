import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingRequestInputSchema } from './MerchantCreateWithoutBookingRequestInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestInputSchema';
import { MerchantCreateOrConnectWithoutBookingRequestInputSchema } from './MerchantCreateOrConnectWithoutBookingRequestInputSchema';
import { MerchantUpsertWithoutBookingRequestInputSchema } from './MerchantUpsertWithoutBookingRequestInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutBookingRequestInputSchema } from './MerchantUpdateToOneWithWhereWithoutBookingRequestInputSchema';
import { MerchantUpdateWithoutBookingRequestInputSchema } from './MerchantUpdateWithoutBookingRequestInputSchema';
import { MerchantUncheckedUpdateWithoutBookingRequestInputSchema } from './MerchantUncheckedUpdateWithoutBookingRequestInputSchema';

export const MerchantUpdateOneRequiredWithoutBookingRequestNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutBookingRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutBookingRequestInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutBookingRequestInputSchema),z.lazy(() => MerchantUpdateWithoutBookingRequestInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingRequestInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutBookingRequestNestedInputSchema;
