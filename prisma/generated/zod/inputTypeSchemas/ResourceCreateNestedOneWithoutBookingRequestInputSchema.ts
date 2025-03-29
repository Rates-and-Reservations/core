import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutBookingRequestInputSchema } from './ResourceCreateWithoutBookingRequestInputSchema';
import { ResourceUncheckedCreateWithoutBookingRequestInputSchema } from './ResourceUncheckedCreateWithoutBookingRequestInputSchema';
import { ResourceCreateOrConnectWithoutBookingRequestInputSchema } from './ResourceCreateOrConnectWithoutBookingRequestInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';

export const ResourceCreateNestedOneWithoutBookingRequestInputSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutBookingRequestInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutBookingRequestInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional()
}).strict();

export default ResourceCreateNestedOneWithoutBookingRequestInputSchema;
