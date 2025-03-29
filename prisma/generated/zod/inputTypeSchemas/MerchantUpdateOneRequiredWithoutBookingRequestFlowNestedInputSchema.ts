import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingRequestFlowInputSchema } from './MerchantCreateWithoutBookingRequestFlowInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema } from './MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema';
import { MerchantUpsertWithoutBookingRequestFlowInputSchema } from './MerchantUpsertWithoutBookingRequestFlowInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema } from './MerchantUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema';
import { MerchantUpdateWithoutBookingRequestFlowInputSchema } from './MerchantUpdateWithoutBookingRequestFlowInputSchema';
import { MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema';

export const MerchantUpdateOneRequiredWithoutBookingRequestFlowNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutBookingRequestFlowNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutBookingRequestFlowInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutBookingRequestFlowNestedInputSchema;
