import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnScalarWhereInputSchema } from './AddOnScalarWhereInputSchema';
import { AddOnUpdateManyMutationInputSchema } from './AddOnUpdateManyMutationInputSchema';
import { AddOnUncheckedUpdateManyWithoutMerchantInputSchema } from './AddOnUncheckedUpdateManyWithoutMerchantInputSchema';

export const AddOnUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => AddOnScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AddOnUpdateManyMutationInputSchema),z.lazy(() => AddOnUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default AddOnUpdateManyWithWhereWithoutMerchantInputSchema;
