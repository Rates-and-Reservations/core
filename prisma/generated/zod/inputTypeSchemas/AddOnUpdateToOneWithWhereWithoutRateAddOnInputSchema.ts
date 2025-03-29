import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';
import { AddOnUpdateWithoutRateAddOnInputSchema } from './AddOnUpdateWithoutRateAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutRateAddOnInputSchema } from './AddOnUncheckedUpdateWithoutRateAddOnInputSchema';

export const AddOnUpdateToOneWithWhereWithoutRateAddOnInputSchema: z.ZodType<Prisma.AddOnUpdateToOneWithWhereWithoutRateAddOnInput> = z.object({
  where: z.lazy(() => AddOnWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddOnUpdateWithoutRateAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutRateAddOnInputSchema) ]),
}).strict();

export default AddOnUpdateToOneWithWhereWithoutRateAddOnInputSchema;
