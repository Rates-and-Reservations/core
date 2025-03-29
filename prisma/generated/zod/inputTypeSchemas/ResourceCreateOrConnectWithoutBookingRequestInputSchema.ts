import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceCreateWithoutBookingRequestInputSchema } from './ResourceCreateWithoutBookingRequestInputSchema';
import { ResourceUncheckedCreateWithoutBookingRequestInputSchema } from './ResourceUncheckedCreateWithoutBookingRequestInputSchema';

export const ResourceCreateOrConnectWithoutBookingRequestInputSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceCreateWithoutBookingRequestInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default ResourceCreateOrConnectWithoutBookingRequestInputSchema;
