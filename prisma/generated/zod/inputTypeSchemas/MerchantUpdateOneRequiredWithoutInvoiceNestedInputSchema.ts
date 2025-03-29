import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutInvoiceInputSchema } from './MerchantCreateWithoutInvoiceInputSchema';
import { MerchantUncheckedCreateWithoutInvoiceInputSchema } from './MerchantUncheckedCreateWithoutInvoiceInputSchema';
import { MerchantCreateOrConnectWithoutInvoiceInputSchema } from './MerchantCreateOrConnectWithoutInvoiceInputSchema';
import { MerchantUpsertWithoutInvoiceInputSchema } from './MerchantUpsertWithoutInvoiceInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutInvoiceInputSchema } from './MerchantUpdateToOneWithWhereWithoutInvoiceInputSchema';
import { MerchantUpdateWithoutInvoiceInputSchema } from './MerchantUpdateWithoutInvoiceInputSchema';
import { MerchantUncheckedUpdateWithoutInvoiceInputSchema } from './MerchantUncheckedUpdateWithoutInvoiceInputSchema';

export const MerchantUpdateOneRequiredWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutInvoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutInvoiceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutInvoiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutInvoiceInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutInvoiceInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutInvoiceInputSchema),z.lazy(() => MerchantUpdateWithoutInvoiceInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutInvoiceInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutInvoiceNestedInputSchema;
