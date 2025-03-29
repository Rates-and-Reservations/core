import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { NotificationTemplateArgsSchema } from "../outputTypeSchemas/NotificationTemplateArgsSchema"

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => NotificationTemplateArgsSchema)]).optional(),
}).strict()

export default NotificationIncludeSchema;
