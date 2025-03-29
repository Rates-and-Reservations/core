import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceUpdateWithoutBookingRequestInputSchema } from './ResourceUpdateWithoutBookingRequestInputSchema';
import { ResourceUncheckedUpdateWithoutBookingRequestInputSchema } from './ResourceUncheckedUpdateWithoutBookingRequestInputSchema';
import { ResourceCreateWithoutBookingRequestInputSchema } from './ResourceCreateWithoutBookingRequestInputSchema';
import { ResourceUncheckedCreateWithoutBookingRequestInputSchema } from './ResourceUncheckedCreateWithoutBookingRequestInputSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceUpsertWithoutBookingRequestInputSchema: z.ZodType<Prisma.ResourceUpsertWithoutBookingRequestInput> = z.object({
  update: z.union([ z.lazy(() => ResourceUpdateWithoutBookingRequestInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutBookingRequestInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceCreateWithoutBookingRequestInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutBookingRequestInputSchema) ]),
  where: z.lazy(() => ResourceWhereInputSchema).optional()
}).strict();

export default ResourceUpsertWithoutBookingRequestInputSchema;
