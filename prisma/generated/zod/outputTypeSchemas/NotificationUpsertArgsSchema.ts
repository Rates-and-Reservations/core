import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationIncludeSchema } from '../inputTypeSchemas/NotificationIncludeSchema'
import { NotificationWhereUniqueInputSchema } from '../inputTypeSchemas/NotificationWhereUniqueInputSchema'
import { NotificationCreateInputSchema } from '../inputTypeSchemas/NotificationCreateInputSchema'
import { NotificationUncheckedCreateInputSchema } from '../inputTypeSchemas/NotificationUncheckedCreateInputSchema'
import { NotificationUpdateInputSchema } from '../inputTypeSchemas/NotificationUpdateInputSchema'
import { NotificationUncheckedUpdateInputSchema } from '../inputTypeSchemas/NotificationUncheckedUpdateInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { NotificationTemplateArgsSchema } from "../outputTypeSchemas/NotificationTemplateArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  type: z.boolean().optional(),
  channel: z.boolean().optional(),
  notificationTemplateId: z.boolean().optional(),
  recipient: z.boolean().optional(),
  subject: z.boolean().optional(),
  message: z.boolean().optional(),
  status: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  sentAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => NotificationTemplateArgsSchema)]).optional(),
}).strict()

export const NotificationUpsertArgsSchema: z.ZodType<Prisma.NotificationUpsertArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: z.lazy(() => NotificationIncludeSchema).optional(),
  where: NotificationWhereUniqueInputSchema,
  create: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
  update: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
}).strict() ;

export default NotificationUpsertArgsSchema;
