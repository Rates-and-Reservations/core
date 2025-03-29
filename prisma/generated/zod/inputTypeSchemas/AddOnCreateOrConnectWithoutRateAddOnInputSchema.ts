import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnCreateWithoutRateAddOnInputSchema } from './AddOnCreateWithoutRateAddOnInputSchema';
import { AddOnUncheckedCreateWithoutRateAddOnInputSchema } from './AddOnUncheckedCreateWithoutRateAddOnInputSchema';

export const AddOnCreateOrConnectWithoutRateAddOnInputSchema: z.ZodType<Prisma.AddOnCreateOrConnectWithoutRateAddOnInput> = z.object({
  where: z.lazy(() => AddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddOnCreateWithoutRateAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutRateAddOnInputSchema) ]),
}).strict();

export default AddOnCreateOrConnectWithoutRateAddOnInputSchema;
