import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantIncludeSchema } from '../inputTypeSchemas/MerchantIncludeSchema'
import { MerchantWhereUniqueInputSchema } from '../inputTypeSchemas/MerchantWhereUniqueInputSchema'
import { MerchantCreateInputSchema } from '../inputTypeSchemas/MerchantCreateInputSchema'
import { MerchantUncheckedCreateInputSchema } from '../inputTypeSchemas/MerchantUncheckedCreateInputSchema'
import { MerchantUpdateInputSchema } from '../inputTypeSchemas/MerchantUpdateInputSchema'
import { MerchantUncheckedUpdateInputSchema } from '../inputTypeSchemas/MerchantUncheckedUpdateInputSchema'
import { MerchantContactFindManyArgsSchema } from "../outputTypeSchemas/MerchantContactFindManyArgsSchema"
import { MerchantUserFindManyArgsSchema } from "../outputTypeSchemas/MerchantUserFindManyArgsSchema"
import { MerchantAssetFindManyArgsSchema } from "../outputTypeSchemas/MerchantAssetFindManyArgsSchema"
import { ApiKeyFindManyArgsSchema } from "../outputTypeSchemas/ApiKeyFindManyArgsSchema"
import { ResourceTemplateFindManyArgsSchema } from "../outputTypeSchemas/ResourceTemplateFindManyArgsSchema"
import { ResourceFindManyArgsSchema } from "../outputTypeSchemas/ResourceFindManyArgsSchema"
import { RateFindManyArgsSchema } from "../outputTypeSchemas/RateFindManyArgsSchema"
import { DiscountFindManyArgsSchema } from "../outputTypeSchemas/DiscountFindManyArgsSchema"
import { PaymentActionsFindManyArgsSchema } from "../outputTypeSchemas/PaymentActionsFindManyArgsSchema"
import { CustomerFindManyArgsSchema } from "../outputTypeSchemas/CustomerFindManyArgsSchema"
import { BookingRequestFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFindManyArgsSchema"
import { BookingFindManyArgsSchema } from "../outputTypeSchemas/BookingFindManyArgsSchema"
import { AddOnFindManyArgsSchema } from "../outputTypeSchemas/AddOnFindManyArgsSchema"
import { BookingRequestFlowFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFlowFindManyArgsSchema"
import { NotificationFindManyArgsSchema } from "../outputTypeSchemas/NotificationFindManyArgsSchema"
import { WebhookEndpointFindManyArgsSchema } from "../outputTypeSchemas/WebhookEndpointFindManyArgsSchema"
import { WebhookEventFindManyArgsSchema } from "../outputTypeSchemas/WebhookEventFindManyArgsSchema"
import { AuditLogFindManyArgsSchema } from "../outputTypeSchemas/AuditLogFindManyArgsSchema"
import { WaitlistEntryFindManyArgsSchema } from "../outputTypeSchemas/WaitlistEntryFindManyArgsSchema"
import { InvoiceFindManyArgsSchema } from "../outputTypeSchemas/InvoiceFindManyArgsSchema"
import { BookingActivityLogFindManyArgsSchema } from "../outputTypeSchemas/BookingActivityLogFindManyArgsSchema"
import { RefundRequestFindManyArgsSchema } from "../outputTypeSchemas/RefundRequestFindManyArgsSchema"
import { ApiUsageLogFindManyArgsSchema } from "../outputTypeSchemas/ApiUsageLogFindManyArgsSchema"
import { ApiUsageStatFindManyArgsSchema } from "../outputTypeSchemas/ApiUsageStatFindManyArgsSchema"
import { AppFindManyArgsSchema } from "../outputTypeSchemas/AppFindManyArgsSchema"
import { AppInstallFindManyArgsSchema } from "../outputTypeSchemas/AppInstallFindManyArgsSchema"
import { OAuthTokenFindManyArgsSchema } from "../outputTypeSchemas/OAuthTokenFindManyArgsSchema"
import { BookingTemplateFindManyArgsSchema } from "../outputTypeSchemas/BookingTemplateFindManyArgsSchema"
import { UiTemplateFindManyArgsSchema } from "../outputTypeSchemas/UiTemplateFindManyArgsSchema"
import { CancellationPolicyFindManyArgsSchema } from "../outputTypeSchemas/CancellationPolicyFindManyArgsSchema"
import { MerchantCountOutputTypeArgsSchema } from "../outputTypeSchemas/MerchantCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MerchantSelectSchema: z.ZodType<Prisma.MerchantSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  country: z.boolean().optional(),
  businessType: z.boolean().optional(),
  tradingName: z.boolean().optional(),
  vatNumber: z.boolean().optional(),
  description: z.boolean().optional(),
  logo: z.boolean().optional(),
  industry: z.boolean().optional(),
  category: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  MerchantContact: z.union([z.boolean(),z.lazy(() => MerchantContactFindManyArgsSchema)]).optional(),
  MerchantUser: z.union([z.boolean(),z.lazy(() => MerchantUserFindManyArgsSchema)]).optional(),
  MerchantAsset: z.union([z.boolean(),z.lazy(() => MerchantAssetFindManyArgsSchema)]).optional(),
  ApiKey: z.union([z.boolean(),z.lazy(() => ApiKeyFindManyArgsSchema)]).optional(),
  ResourceTemplate: z.union([z.boolean(),z.lazy(() => ResourceTemplateFindManyArgsSchema)]).optional(),
  Resource: z.union([z.boolean(),z.lazy(() => ResourceFindManyArgsSchema)]).optional(),
  Rate: z.union([z.boolean(),z.lazy(() => RateFindManyArgsSchema)]).optional(),
  Discount: z.union([z.boolean(),z.lazy(() => DiscountFindManyArgsSchema)]).optional(),
  PaymentActions: z.union([z.boolean(),z.lazy(() => PaymentActionsFindManyArgsSchema)]).optional(),
  Customer: z.union([z.boolean(),z.lazy(() => CustomerFindManyArgsSchema)]).optional(),
  BookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestFindManyArgsSchema)]).optional(),
  Booking: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  AddOn: z.union([z.boolean(),z.lazy(() => AddOnFindManyArgsSchema)]).optional(),
  BookingRequestFlow: z.union([z.boolean(),z.lazy(() => BookingRequestFlowFindManyArgsSchema)]).optional(),
  Notification: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  WebhookEndpoint: z.union([z.boolean(),z.lazy(() => WebhookEndpointFindManyArgsSchema)]).optional(),
  WebhookEvent: z.union([z.boolean(),z.lazy(() => WebhookEventFindManyArgsSchema)]).optional(),
  AuditLog: z.union([z.boolean(),z.lazy(() => AuditLogFindManyArgsSchema)]).optional(),
  WaitlistEntry: z.union([z.boolean(),z.lazy(() => WaitlistEntryFindManyArgsSchema)]).optional(),
  Invoice: z.union([z.boolean(),z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
  BookingActivityLog: z.union([z.boolean(),z.lazy(() => BookingActivityLogFindManyArgsSchema)]).optional(),
  RefundRequest: z.union([z.boolean(),z.lazy(() => RefundRequestFindManyArgsSchema)]).optional(),
  ApiUsageLog: z.union([z.boolean(),z.lazy(() => ApiUsageLogFindManyArgsSchema)]).optional(),
  ApiUsageStat: z.union([z.boolean(),z.lazy(() => ApiUsageStatFindManyArgsSchema)]).optional(),
  App: z.union([z.boolean(),z.lazy(() => AppFindManyArgsSchema)]).optional(),
  AppInstall: z.union([z.boolean(),z.lazy(() => AppInstallFindManyArgsSchema)]).optional(),
  OAuthToken: z.union([z.boolean(),z.lazy(() => OAuthTokenFindManyArgsSchema)]).optional(),
  BookingTemplate: z.union([z.boolean(),z.lazy(() => BookingTemplateFindManyArgsSchema)]).optional(),
  UiTemplate: z.union([z.boolean(),z.lazy(() => UiTemplateFindManyArgsSchema)]).optional(),
  CancellationPolicy: z.union([z.boolean(),z.lazy(() => CancellationPolicyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MerchantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MerchantUpsertArgsSchema: z.ZodType<Prisma.MerchantUpsertArgs> = z.object({
  select: MerchantSelectSchema.optional(),
  include: z.lazy(() => MerchantIncludeSchema).optional(),
  where: MerchantWhereUniqueInputSchema,
  create: z.union([ MerchantCreateInputSchema,MerchantUncheckedCreateInputSchema ]),
  update: z.union([ MerchantUpdateInputSchema,MerchantUncheckedUpdateInputSchema ]),
}).strict() ;

export default MerchantUpsertArgsSchema;
