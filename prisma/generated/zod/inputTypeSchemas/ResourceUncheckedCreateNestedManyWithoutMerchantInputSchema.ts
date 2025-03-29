import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutMerchantInputSchema } from './ResourceCreateWithoutMerchantInputSchema';
import { ResourceUncheckedCreateWithoutMerchantInputSchema } from './ResourceUncheckedCreateWithoutMerchantInputSchema';
import { ResourceCreateOrConnectWithoutMerchantInputSchema } from './ResourceCreateOrConnectWithoutMerchantInputSchema';
import { ResourceCreateManyMerchantInputEnvelopeSchema } from './ResourceCreateManyMerchantInputEnvelopeSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';

export const ResourceUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutMerchantInputSchema),z.lazy(() => ResourceCreateWithoutMerchantInputSchema).array(),z.lazy(() => ResourceUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ResourceCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResourceWhereUniqueInputSchema),z.lazy(() => ResourceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ResourceUncheckedCreateNestedManyWithoutMerchantInputSchema;
