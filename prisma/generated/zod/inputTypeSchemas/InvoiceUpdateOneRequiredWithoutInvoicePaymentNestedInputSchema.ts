import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutInvoicePaymentInputSchema } from './InvoiceCreateWithoutInvoicePaymentInputSchema';
import { InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema } from './InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema';
import { InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema } from './InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema';
import { InvoiceUpsertWithoutInvoicePaymentInputSchema } from './InvoiceUpsertWithoutInvoicePaymentInputSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateToOneWithWhereWithoutInvoicePaymentInputSchema } from './InvoiceUpdateToOneWithWhereWithoutInvoicePaymentInputSchema';
import { InvoiceUpdateWithoutInvoicePaymentInputSchema } from './InvoiceUpdateWithoutInvoicePaymentInputSchema';
import { InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema } from './InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema';

export const InvoiceUpdateOneRequiredWithoutInvoicePaymentNestedInputSchema: z.ZodType<Prisma.InvoiceUpdateOneRequiredWithoutInvoicePaymentNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema).optional(),
  upsert: z.lazy(() => InvoiceUpsertWithoutInvoicePaymentInputSchema).optional(),
  connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InvoiceUpdateToOneWithWhereWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUpdateWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema) ]).optional(),
}).strict();

export default InvoiceUpdateOneRequiredWithoutInvoicePaymentNestedInputSchema;
