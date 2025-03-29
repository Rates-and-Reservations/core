import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateUpdateWithoutMerchantInputSchema } from './BookingTemplateUpdateWithoutMerchantInputSchema';
import { BookingTemplateUncheckedUpdateWithoutMerchantInputSchema } from './BookingTemplateUncheckedUpdateWithoutMerchantInputSchema';

export const BookingTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingTemplateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingTemplateUpdateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema;
