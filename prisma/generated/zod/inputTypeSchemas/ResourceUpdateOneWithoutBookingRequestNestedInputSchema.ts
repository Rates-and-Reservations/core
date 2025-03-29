import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutBookingRequestInputSchema } from './ResourceCreateWithoutBookingRequestInputSchema';
import { ResourceUncheckedCreateWithoutBookingRequestInputSchema } from './ResourceUncheckedCreateWithoutBookingRequestInputSchema';
import { ResourceCreateOrConnectWithoutBookingRequestInputSchema } from './ResourceCreateOrConnectWithoutBookingRequestInputSchema';
import { ResourceUpsertWithoutBookingRequestInputSchema } from './ResourceUpsertWithoutBookingRequestInputSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateToOneWithWhereWithoutBookingRequestInputSchema } from './ResourceUpdateToOneWithWhereWithoutBookingRequestInputSchema';
import { ResourceUpdateWithoutBookingRequestInputSchema } from './ResourceUpdateWithoutBookingRequestInputSchema';
import { ResourceUncheckedUpdateWithoutBookingRequestInputSchema } from './ResourceUncheckedUpdateWithoutBookingRequestInputSchema';

export const ResourceUpdateOneWithoutBookingRequestNestedInputSchema: z.ZodType<Prisma.ResourceUpdateOneWithoutBookingRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutBookingRequestInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  upsert: z.lazy(() => ResourceUpsertWithoutBookingRequestInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ResourceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ResourceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ResourceUpdateToOneWithWhereWithoutBookingRequestInputSchema),z.lazy(() => ResourceUpdateWithoutBookingRequestInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutBookingRequestInputSchema) ]).optional(),
}).strict();

export default ResourceUpdateOneWithoutBookingRequestNestedInputSchema;
