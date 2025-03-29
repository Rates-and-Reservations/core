import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { MerchantContactUncheckedCreateNestedManyWithoutMerchantInputSchema } from './MerchantContactUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { MerchantUserUncheckedCreateNestedManyWithoutMerchantInputSchema } from './MerchantUserUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { MerchantAssetUncheckedCreateNestedManyWithoutMerchantInputSchema } from './MerchantAssetUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { ApiKeyUncheckedCreateNestedManyWithoutMerchantInputSchema } from './ApiKeyUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { ResourceTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema } from './ResourceTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { ResourceUncheckedCreateNestedManyWithoutMerchantInputSchema } from './ResourceUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { RateUncheckedCreateNestedManyWithoutMerchantInputSchema } from './RateUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { DiscountUncheckedCreateNestedManyWithoutMerchantInputSchema } from './DiscountUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { PaymentActionsUncheckedCreateNestedManyWithoutMerchantInputSchema } from './PaymentActionsUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { CustomerUncheckedCreateNestedManyWithoutMerchantInputSchema } from './CustomerUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { BookingRequestUncheckedCreateNestedManyWithoutMerchantInputSchema } from './BookingRequestUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { BookingUncheckedCreateNestedManyWithoutMerchantInputSchema } from './BookingUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { AddOnUncheckedCreateNestedManyWithoutMerchantInputSchema } from './AddOnUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { BookingRequestFlowUncheckedCreateNestedManyWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { WebhookEndpointUncheckedCreateNestedManyWithoutMerchantInputSchema } from './WebhookEndpointUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { WebhookEventUncheckedCreateNestedManyWithoutMerchantInputSchema } from './WebhookEventUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { AuditLogUncheckedCreateNestedManyWithoutMerchantInputSchema } from './AuditLogUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { WaitlistEntryUncheckedCreateNestedManyWithoutMerchantInputSchema } from './WaitlistEntryUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { InvoiceUncheckedCreateNestedManyWithoutMerchantInputSchema } from './InvoiceUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { BookingActivityLogUncheckedCreateNestedManyWithoutMerchantInputSchema } from './BookingActivityLogUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { RefundRequestUncheckedCreateNestedManyWithoutMerchantInputSchema } from './RefundRequestUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { ApiUsageLogUncheckedCreateNestedManyWithoutMerchantInputSchema } from './ApiUsageLogUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { ApiUsageStatUncheckedCreateNestedManyWithoutMerchantInputSchema } from './ApiUsageStatUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { AppUncheckedCreateNestedManyWithoutMerchantInputSchema } from './AppUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { AppInstallUncheckedCreateNestedManyWithoutMerchantInputSchema } from './AppInstallUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { OAuthTokenUncheckedCreateNestedManyWithoutMerchantInputSchema } from './OAuthTokenUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { BookingTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema } from './BookingTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { UiTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema } from './UiTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema';
import { CancellationPolicyUncheckedCreateNestedManyWithoutMerchantInputSchema } from './CancellationPolicyUncheckedCreateNestedManyWithoutMerchantInputSchema';

export const MerchantUncheckedCreateWithoutNotificationInputSchema: z.ZodType<Prisma.MerchantUncheckedCreateWithoutNotificationInput> = z.object({
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  MerchantContact: z.lazy(() => MerchantContactUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  MerchantUser: z.lazy(() => MerchantUserUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  MerchantAsset: z.lazy(() => MerchantAssetUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  ApiKey: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  ResourceTemplate: z.lazy(() => ResourceTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  Resource: z.lazy(() => ResourceUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  Rate: z.lazy(() => RateUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  Discount: z.lazy(() => DiscountUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  Customer: z.lazy(() => CustomerUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  Booking: z.lazy(() => BookingUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  AddOn: z.lazy(() => AddOnUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  WebhookEndpoint: z.lazy(() => WebhookEndpointUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  WebhookEvent: z.lazy(() => WebhookEventUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  AuditLog: z.lazy(() => AuditLogUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  App: z.lazy(() => AppUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  AppInstall: z.lazy(() => AppInstallUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  OAuthToken: z.lazy(() => OAuthTokenUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  BookingTemplate: z.lazy(() => BookingTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  UiTemplate: z.lazy(() => UiTemplateUncheckedCreateNestedManyWithoutMerchantInputSchema).optional(),
  CancellationPolicy: z.lazy(() => CancellationPolicyUncheckedCreateNestedManyWithoutMerchantInputSchema).optional()
}).strict();

export default MerchantUncheckedCreateWithoutNotificationInputSchema;
