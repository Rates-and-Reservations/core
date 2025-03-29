import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowScalarWhereInputSchema } from './BookingRequestFlowScalarWhereInputSchema';
import { BookingRequestFlowUpdateManyMutationInputSchema } from './BookingRequestFlowUpdateManyMutationInputSchema';
import { BookingRequestFlowUncheckedUpdateManyWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedUpdateManyWithoutMerchantInputSchema';

export const BookingRequestFlowUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingRequestFlowScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingRequestFlowUpdateManyMutationInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default BookingRequestFlowUpdateManyWithWhereWithoutMerchantInputSchema;
