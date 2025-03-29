import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateCreateWithoutMerchantInputSchema } from './BookingTemplateCreateWithoutMerchantInputSchema';
import { BookingTemplateUncheckedCreateWithoutMerchantInputSchema } from './BookingTemplateUncheckedCreateWithoutMerchantInputSchema';
import { BookingTemplateCreateOrConnectWithoutMerchantInputSchema } from './BookingTemplateCreateOrConnectWithoutMerchantInputSchema';
import { BookingTemplateCreateManyMerchantInputEnvelopeSchema } from './BookingTemplateCreateManyMerchantInputEnvelopeSchema';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';

export const BookingTemplateCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.BookingTemplateCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingTemplateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingTemplateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingTemplateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingTemplateCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingTemplateWhereUniqueInputSchema),z.lazy(() => BookingTemplateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingTemplateCreateNestedManyWithoutMerchantInputSchema;
