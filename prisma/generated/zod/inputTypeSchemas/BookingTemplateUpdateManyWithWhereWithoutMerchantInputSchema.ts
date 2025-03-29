import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateScalarWhereInputSchema } from './BookingTemplateScalarWhereInputSchema';
import { BookingTemplateUpdateManyMutationInputSchema } from './BookingTemplateUpdateManyMutationInputSchema';
import { BookingTemplateUncheckedUpdateManyWithoutMerchantInputSchema } from './BookingTemplateUncheckedUpdateManyWithoutMerchantInputSchema';

export const BookingTemplateUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingTemplateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingTemplateUpdateManyMutationInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default BookingTemplateUpdateManyWithWhereWithoutMerchantInputSchema;
