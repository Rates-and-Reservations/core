import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutRateAddOnInputSchema } from './AddOnCreateWithoutRateAddOnInputSchema';
import { AddOnUncheckedCreateWithoutRateAddOnInputSchema } from './AddOnUncheckedCreateWithoutRateAddOnInputSchema';
import { AddOnCreateOrConnectWithoutRateAddOnInputSchema } from './AddOnCreateOrConnectWithoutRateAddOnInputSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';

export const AddOnCreateNestedOneWithoutRateAddOnInputSchema: z.ZodType<Prisma.AddOnCreateNestedOneWithoutRateAddOnInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutRateAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutRateAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddOnCreateOrConnectWithoutRateAddOnInputSchema).optional(),
  connect: z.lazy(() => AddOnWhereUniqueInputSchema).optional()
}).strict();

export default AddOnCreateNestedOneWithoutRateAddOnInputSchema;
