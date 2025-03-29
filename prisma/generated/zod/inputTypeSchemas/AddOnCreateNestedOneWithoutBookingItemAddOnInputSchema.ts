import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutBookingItemAddOnInputSchema } from './AddOnCreateWithoutBookingItemAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema';
import { AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema } from './AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';

export const AddOnCreateNestedOneWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.AddOnCreateNestedOneWithoutBookingItemAddOnInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema).optional(),
  connect: z.lazy(() => AddOnWhereUniqueInputSchema).optional()
}).strict();

export default AddOnCreateNestedOneWithoutBookingItemAddOnInputSchema;
