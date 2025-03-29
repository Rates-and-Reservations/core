import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { ResourceUpdateWithoutBookingRequestInputSchema } from './ResourceUpdateWithoutBookingRequestInputSchema';
import { ResourceUncheckedUpdateWithoutBookingRequestInputSchema } from './ResourceUncheckedUpdateWithoutBookingRequestInputSchema';

export const ResourceUpdateToOneWithWhereWithoutBookingRequestInputSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => ResourceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ResourceUpdateWithoutBookingRequestInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutBookingRequestInputSchema) ]),
}).strict();

export default ResourceUpdateToOneWithWhereWithoutBookingRequestInputSchema;
