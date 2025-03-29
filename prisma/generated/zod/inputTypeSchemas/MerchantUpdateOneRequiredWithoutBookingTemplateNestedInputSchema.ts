import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingTemplateInputSchema } from './MerchantCreateWithoutBookingTemplateInputSchema';
import { MerchantUncheckedCreateWithoutBookingTemplateInputSchema } from './MerchantUncheckedCreateWithoutBookingTemplateInputSchema';
import { MerchantCreateOrConnectWithoutBookingTemplateInputSchema } from './MerchantCreateOrConnectWithoutBookingTemplateInputSchema';
import { MerchantUpsertWithoutBookingTemplateInputSchema } from './MerchantUpsertWithoutBookingTemplateInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutBookingTemplateInputSchema } from './MerchantUpdateToOneWithWhereWithoutBookingTemplateInputSchema';
import { MerchantUpdateWithoutBookingTemplateInputSchema } from './MerchantUpdateWithoutBookingTemplateInputSchema';
import { MerchantUncheckedUpdateWithoutBookingTemplateInputSchema } from './MerchantUncheckedUpdateWithoutBookingTemplateInputSchema';

export const MerchantUpdateOneRequiredWithoutBookingTemplateNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutBookingTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingTemplateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingTemplateInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutBookingTemplateInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUpdateWithoutBookingTemplateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutBookingTemplateInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutBookingTemplateNestedInputSchema;
