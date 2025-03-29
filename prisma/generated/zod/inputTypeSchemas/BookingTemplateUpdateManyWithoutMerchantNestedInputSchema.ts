import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateCreateWithoutMerchantInputSchema } from './BookingTemplateCreateWithoutMerchantInputSchema';
import { BookingTemplateUncheckedCreateWithoutMerchantInputSchema } from './BookingTemplateUncheckedCreateWithoutMerchantInputSchema';
import { BookingTemplateCreateOrConnectWithoutMerchantInputSchema } from './BookingTemplateCreateOrConnectWithoutMerchantInputSchema';
import { BookingTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema } from './BookingTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { BookingTemplateCreateManyMerchantInputEnvelopeSchema } from './BookingTemplateCreateManyMerchantInputEnvelopeSchema';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema } from './BookingTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { BookingTemplateUpdateManyWithWhereWithoutMerchantInputSchema } from './BookingTemplateUpdateManyWithWhereWithoutMerchantInputSchema';
import { BookingTemplateScalarWhereInputSchema } from './BookingTemplateScalarWhereInputSchema';

export const BookingTemplateUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.BookingTemplateUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingTemplateUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingTemplateCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingTemplateCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingTemplateCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingTemplateWhereUniqueInputSchema),z.lazy(() => BookingTemplateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingTemplateWhereUniqueInputSchema),z.lazy(() => BookingTemplateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingTemplateWhereUniqueInputSchema),z.lazy(() => BookingTemplateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingTemplateWhereUniqueInputSchema),z.lazy(() => BookingTemplateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingTemplateUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => BookingTemplateUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingTemplateScalarWhereInputSchema),z.lazy(() => BookingTemplateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingTemplateUpdateManyWithoutMerchantNestedInputSchema;
