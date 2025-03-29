import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateUpdateWithoutMerchantInputSchema } from './BookingTemplateUpdateWithoutMerchantInputSchema';
import { BookingTemplateUncheckedUpdateWithoutMerchantInputSchema } from './BookingTemplateUncheckedUpdateWithoutMerchantInputSchema';
import { BookingTemplateCreateWithoutMerchantInputSchema } from './BookingTemplateCreateWithoutMerchantInputSchema';
import { BookingTemplateUncheckedCreateWithoutMerchantInputSchema } from './BookingTemplateUncheckedCreateWithoutMerchantInputSchema';

export const BookingTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => BookingTemplateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingTemplateUpdateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default BookingTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema;
