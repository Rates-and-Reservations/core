import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutMerchantInputSchema } from './AddOnCreateWithoutMerchantInputSchema';
import { AddOnUncheckedCreateWithoutMerchantInputSchema } from './AddOnUncheckedCreateWithoutMerchantInputSchema';
import { AddOnCreateOrConnectWithoutMerchantInputSchema } from './AddOnCreateOrConnectWithoutMerchantInputSchema';
import { AddOnCreateManyMerchantInputEnvelopeSchema } from './AddOnCreateManyMerchantInputEnvelopeSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';

export const AddOnUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutMerchantInputSchema),z.lazy(() => AddOnCreateWithoutMerchantInputSchema).array(),z.lazy(() => AddOnUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AddOnCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => AddOnCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AddOnCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AddOnWhereUniqueInputSchema),z.lazy(() => AddOnWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AddOnUncheckedCreateNestedManyWithoutMerchantInputSchema;
