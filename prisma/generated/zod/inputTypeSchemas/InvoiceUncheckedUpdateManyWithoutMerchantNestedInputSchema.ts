import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutMerchantInputSchema } from './InvoiceCreateWithoutMerchantInputSchema';
import { InvoiceUncheckedCreateWithoutMerchantInputSchema } from './InvoiceUncheckedCreateWithoutMerchantInputSchema';
import { InvoiceCreateOrConnectWithoutMerchantInputSchema } from './InvoiceCreateOrConnectWithoutMerchantInputSchema';
import { InvoiceUpsertWithWhereUniqueWithoutMerchantInputSchema } from './InvoiceUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { InvoiceCreateManyMerchantInputEnvelopeSchema } from './InvoiceCreateManyMerchantInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithWhereUniqueWithoutMerchantInputSchema } from './InvoiceUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { InvoiceUpdateManyWithWhereWithoutMerchantInputSchema } from './InvoiceUpdateManyWithWhereWithoutMerchantInputSchema';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';

export const InvoiceUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutMerchantInputSchema),z.lazy(() => InvoiceCreateWithoutMerchantInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoiceUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => InvoiceUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoiceScalarWhereInputSchema),z.lazy(() => InvoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUncheckedUpdateManyWithoutMerchantNestedInputSchema;
