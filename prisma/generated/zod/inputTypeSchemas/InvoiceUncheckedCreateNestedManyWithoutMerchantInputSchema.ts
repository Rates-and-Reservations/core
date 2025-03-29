import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutMerchantInputSchema } from './InvoiceCreateWithoutMerchantInputSchema';
import { InvoiceUncheckedCreateWithoutMerchantInputSchema } from './InvoiceUncheckedCreateWithoutMerchantInputSchema';
import { InvoiceCreateOrConnectWithoutMerchantInputSchema } from './InvoiceCreateOrConnectWithoutMerchantInputSchema';
import { InvoiceCreateManyMerchantInputEnvelopeSchema } from './InvoiceCreateManyMerchantInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';

export const InvoiceUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutMerchantInputSchema),z.lazy(() => InvoiceCreateWithoutMerchantInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUncheckedCreateNestedManyWithoutMerchantInputSchema;
