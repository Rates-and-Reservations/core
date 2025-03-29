import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowIncludeSchema } from '../inputTypeSchemas/BookingRequestFlowIncludeSchema'
import { BookingRequestFlowWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRequestFlowWhereUniqueInputSchema'
import { BookingRequestFlowCreateInputSchema } from '../inputTypeSchemas/BookingRequestFlowCreateInputSchema'
import { BookingRequestFlowUncheckedCreateInputSchema } from '../inputTypeSchemas/BookingRequestFlowUncheckedCreateInputSchema'
import { BookingRequestFlowUpdateInputSchema } from '../inputTypeSchemas/BookingRequestFlowUpdateInputSchema'
import { BookingRequestFlowUncheckedUpdateInputSchema } from '../inputTypeSchemas/BookingRequestFlowUncheckedUpdateInputSchema'
import { BookingRequestArgsSchema } from "../outputTypeSchemas/BookingRequestArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { UiTemplateArgsSchema } from "../outputTypeSchemas/UiTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingRequestFlowSelectSchema: z.ZodType<Prisma.BookingRequestFlowSelect> = z.object({
  id: z.boolean().optional(),
  bookingRequestId: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  uiTemplateId: z.boolean().optional(),
  slug: z.boolean().optional(),
  usageLimit: z.boolean().optional(),
  usageCount: z.boolean().optional(),
  webhookUrl: z.boolean().optional(),
  webhookEvents: z.boolean().optional(),
  isActive: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  bookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestArgsSchema)]).optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  uiTemplate: z.union([z.boolean(),z.lazy(() => UiTemplateArgsSchema)]).optional(),
}).strict()

export const BookingRequestFlowUpsertArgsSchema: z.ZodType<Prisma.BookingRequestFlowUpsertArgs> = z.object({
  select: BookingRequestFlowSelectSchema.optional(),
  include: z.lazy(() => BookingRequestFlowIncludeSchema).optional(),
  where: BookingRequestFlowWhereUniqueInputSchema,
  create: z.union([ BookingRequestFlowCreateInputSchema,BookingRequestFlowUncheckedCreateInputSchema ]),
  update: z.union([ BookingRequestFlowUpdateInputSchema,BookingRequestFlowUncheckedUpdateInputSchema ]),
}).strict() ;

export default BookingRequestFlowUpsertArgsSchema;
