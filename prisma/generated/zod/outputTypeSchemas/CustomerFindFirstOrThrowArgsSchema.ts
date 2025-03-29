import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerIncludeSchema } from '../inputTypeSchemas/CustomerIncludeSchema'
import { CustomerWhereInputSchema } from '../inputTypeSchemas/CustomerWhereInputSchema'
import { CustomerOrderByWithRelationInputSchema } from '../inputTypeSchemas/CustomerOrderByWithRelationInputSchema'
import { CustomerWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerWhereUniqueInputSchema'
import { CustomerScalarFieldEnumSchema } from '../inputTypeSchemas/CustomerScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { NotificationFindManyArgsSchema } from "../outputTypeSchemas/NotificationFindManyArgsSchema"
import { WaitlistEntryFindManyArgsSchema } from "../outputTypeSchemas/WaitlistEntryFindManyArgsSchema"
import { InvoiceFindManyArgsSchema } from "../outputTypeSchemas/InvoiceFindManyArgsSchema"
import { BookingRequestFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFindManyArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { CustomerCountOutputTypeArgsSchema } from "../outputTypeSchemas/CustomerCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  phone: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  postcode: z.boolean().optional(),
  country: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  Notification: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  WaitlistEntry: z.union([z.boolean(),z.lazy(() => WaitlistEntryFindManyArgsSchema)]).optional(),
  Invoice: z.union([z.boolean(),z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
  BookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestFindManyArgsSchema)]).optional(),
  Booking: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CustomerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CustomerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CustomerFindFirstOrThrowArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  include: z.lazy(() => CustomerIncludeSchema).optional(),
  where: CustomerWhereInputSchema.optional(),
  orderBy: z.union([ CustomerOrderByWithRelationInputSchema.array(),CustomerOrderByWithRelationInputSchema ]).optional(),
  cursor: CustomerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CustomerScalarFieldEnumSchema,CustomerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CustomerFindFirstOrThrowArgsSchema;
