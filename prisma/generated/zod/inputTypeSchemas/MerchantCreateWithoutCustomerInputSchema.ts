import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { MerchantContactCreateNestedManyWithoutMerchantInputSchema } from './MerchantContactCreateNestedManyWithoutMerchantInputSchema';
import { MerchantUserCreateNestedManyWithoutMerchantInputSchema } from './MerchantUserCreateNestedManyWithoutMerchantInputSchema';
import { MerchantAssetCreateNestedManyWithoutMerchantInputSchema } from './MerchantAssetCreateNestedManyWithoutMerchantInputSchema';
import { ApiKeyCreateNestedManyWithoutMerchantInputSchema } from './ApiKeyCreateNestedManyWithoutMerchantInputSchema';
import { ResourceTemplateCreateNestedManyWithoutMerchantInputSchema } from './ResourceTemplateCreateNestedManyWithoutMerchantInputSchema';
import { ResourceCreateNestedManyWithoutMerchantInputSchema } from './ResourceCreateNestedManyWithoutMerchantInputSchema';
import { RateCreateNestedManyWithoutMerchantInputSchema } from './RateCreateNestedManyWithoutMerchantInputSchema';
import { DiscountCreateNestedManyWithoutMerchantInputSchema } from './DiscountCreateNestedManyWithoutMerchantInputSchema';
import { PaymentActionsCreateNestedManyWithoutMerchantInputSchema } from './PaymentActionsCreateNestedManyWithoutMerchantInputSchema';
import { BookingRequestCreateNestedManyWithoutMerchantInputSchema } from './BookingRequestCreateNestedManyWithoutMerchantInputSchema';
import { BookingCreateNestedManyWithoutMerchantInputSchema } from './BookingCreateNestedManyWithoutMerchantInputSchema';
import { AddOnCreateNestedManyWithoutMerchantInputSchema } from './AddOnCreateNestedManyWithoutMerchantInputSchema';
import { BookingRequestFlowCreateNestedManyWithoutMerchantInputSchema } from './BookingRequestFlowCreateNestedManyWithoutMerchantInputSchema';
import { NotificationCreateNestedManyWithoutMerchantInputSchema } from './NotificationCreateNestedManyWithoutMerchantInputSchema';
import { WebhookEndpointCreateNestedManyWithoutMerchantInputSchema } from './WebhookEndpointCreateNestedManyWithoutMerchantInputSchema';
import { WebhookEventCreateNestedManyWithoutMerchantInputSchema } from './WebhookEventCreateNestedManyWithoutMerchantInputSchema';
import { AuditLogCreateNestedManyWithoutMerchantInputSchema } from './AuditLogCreateNestedManyWithoutMerchantInputSchema';
import { WaitlistEntryCreateNestedManyWithoutMerchantInputSchema } from './WaitlistEntryCreateNestedManyWithoutMerchantInputSchema';
import { InvoiceCreateNestedManyWithoutMerchantInputSchema } from './InvoiceCreateNestedManyWithoutMerchantInputSchema';
import { BookingActivityLogCreateNestedManyWithoutMerchantInputSchema } from './BookingActivityLogCreateNestedManyWithoutMerchantInputSchema';
import { RefundRequestCreateNestedManyWithoutMerchantInputSchema } from './RefundRequestCreateNestedManyWithoutMerchantInputSchema';
import { ApiUsageLogCreateNestedManyWithoutMerchantInputSchema } from './ApiUsageLogCreateNestedManyWithoutMerchantInputSchema';
import { ApiUsageStatCreateNestedManyWithoutMerchantInputSchema } from './ApiUsageStatCreateNestedManyWithoutMerchantInputSchema';
import { AppCreateNestedManyWithoutMerchantInputSchema } from './AppCreateNestedManyWithoutMerchantInputSchema';
import { AppInstallCreateNestedManyWithoutMerchantInputSchema } from './AppInstallCreateNestedManyWithoutMerchantInputSchema';
import { OAuthTokenCreateNestedManyWithoutMerchantInputSchema } from './OAuthTokenCreateNestedManyWithoutMerchantInputSchema';
import { BookingTemplateCreateNestedManyWithoutMerchantInputSchema } from './BookingTemplateCreateNestedManyWithoutMerchantInputSchema';
import { UiTemplateCreateNestedManyWithoutMerchantInputSchema } from './UiTemplateCreateNestedManyWithoutMerchantInputSchema';
import { CancellationPolicyCreateNestedManyWithoutMerchantInputSchema } from './CancellationPolicyCreateNestedManyWithoutMerchantInputSchema';

export const MerchantCreateWithoutCustomerInputSchema: z.ZodType<Prisma.MerchantCreateWithoutCustomerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  country: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  tradingName: z.string(),
  vatNumber: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  industry: z.string(),
  category: z.string(),
  isVerified: z.boolean().optional(),
  isActive: z.boolean().optional(),
  verifiedAt: z.coerce.date().optional().nullable(),
  disabledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  MerchantContact: z.lazy(() => MerchantContactCreateNestedManyWithoutMerchantInputSchema).optional(),
  MerchantUser: z.lazy(() => MerchantUserCreateNestedManyWithoutMerchantInputSchema).optional(),
  MerchantAsset: z.lazy(() => MerchantAssetCreateNestedManyWithoutMerchantInputSchema).optional(),
  ApiKey: z.lazy(() => ApiKeyCreateNestedManyWithoutMerchantInputSchema).optional(),
  ResourceTemplate: z.lazy(() => ResourceTemplateCreateNestedManyWithoutMerchantInputSchema).optional(),
  Resource: z.lazy(() => ResourceCreateNestedManyWithoutMerchantInputSchema).optional(),
  Rate: z.lazy(() => RateCreateNestedManyWithoutMerchantInputSchema).optional(),
  Discount: z.lazy(() => DiscountCreateNestedManyWithoutMerchantInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutMerchantInputSchema).optional(),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutMerchantInputSchema).optional(),
  AddOn: z.lazy(() => AddOnCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowCreateNestedManyWithoutMerchantInputSchema).optional(),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutMerchantInputSchema).optional(),
  WebhookEndpoint: z.lazy(() => WebhookEndpointCreateNestedManyWithoutMerchantInputSchema).optional(),
  WebhookEvent: z.lazy(() => WebhookEventCreateNestedManyWithoutMerchantInputSchema).optional(),
  AuditLog: z.lazy(() => AuditLogCreateNestedManyWithoutMerchantInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryCreateNestedManyWithoutMerchantInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogCreateNestedManyWithoutMerchantInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestCreateNestedManyWithoutMerchantInputSchema).optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogCreateNestedManyWithoutMerchantInputSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatCreateNestedManyWithoutMerchantInputSchema).optional(),
  App: z.lazy(() => AppCreateNestedManyWithoutMerchantInputSchema).optional(),
  AppInstall: z.lazy(() => AppInstallCreateNestedManyWithoutMerchantInputSchema).optional(),
  OAuthToken: z.lazy(() => OAuthTokenCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingTemplate: z.lazy(() => BookingTemplateCreateNestedManyWithoutMerchantInputSchema).optional(),
  UiTemplate: z.lazy(() => UiTemplateCreateNestedManyWithoutMerchantInputSchema).optional(),
  CancellationPolicy: z.lazy(() => CancellationPolicyCreateNestedManyWithoutMerchantInputSchema).optional()
}).strict();

export default MerchantCreateWithoutCustomerInputSchema;
