import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateCreateWithoutMerchantInputSchema } from './BookingTemplateCreateWithoutMerchantInputSchema';
import { BookingTemplateUncheckedCreateWithoutMerchantInputSchema } from './BookingTemplateUncheckedCreateWithoutMerchantInputSchema';

export const BookingTemplateCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingTemplateCreateOrConnectWithoutMerchantInputSchema;
