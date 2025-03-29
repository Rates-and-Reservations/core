import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnUpdateWithoutMerchantInputSchema } from './AddOnUpdateWithoutMerchantInputSchema';
import { AddOnUncheckedUpdateWithoutMerchantInputSchema } from './AddOnUncheckedUpdateWithoutMerchantInputSchema';

export const AddOnUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AddOnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AddOnUpdateWithoutMerchantInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default AddOnUpdateWithWhereUniqueWithoutMerchantInputSchema;
