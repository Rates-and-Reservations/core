import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumBusinessTypeFilterSchema } from './EnumBusinessTypeFilterSchema';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantContactListRelationFilterSchema } from './MerchantContactListRelationFilterSchema';
import { MerchantUserListRelationFilterSchema } from './MerchantUserListRelationFilterSchema';
import { MerchantAssetListRelationFilterSchema } from './MerchantAssetListRelationFilterSchema';
import { ApiKeyListRelationFilterSchema } from './ApiKeyListRelationFilterSchema';
import { ResourceTemplateListRelationFilterSchema } from './ResourceTemplateListRelationFilterSchema';
import { ResourceListRelationFilterSchema } from './ResourceListRelationFilterSchema';
import { RateListRelationFilterSchema } from './RateListRelationFilterSchema';
import { DiscountListRelationFilterSchema } from './DiscountListRelationFilterSchema';
import { PaymentActionsListRelationFilterSchema } from './PaymentActionsListRelationFilterSchema';
import { CustomerListRelationFilterSchema } from './CustomerListRelationFilterSchema';
import { BookingRequestListRelationFilterSchema } from './BookingRequestListRelationFilterSchema';
import { BookingListRelationFilterSchema } from './BookingListRelationFilterSchema';
import { AddOnListRelationFilterSchema } from './AddOnListRelationFilterSchema';
import { BookingRequestFlowListRelationFilterSchema } from './BookingRequestFlowListRelationFilterSchema';
import { NotificationListRelationFilterSchema } from './NotificationListRelationFilterSchema';
import { WebhookEndpointListRelationFilterSchema } from './WebhookEndpointListRelationFilterSchema';
import { WebhookEventListRelationFilterSchema } from './WebhookEventListRelationFilterSchema';
import { AuditLogListRelationFilterSchema } from './AuditLogListRelationFilterSchema';
import { WaitlistEntryListRelationFilterSchema } from './WaitlistEntryListRelationFilterSchema';
import { InvoiceListRelationFilterSchema } from './InvoiceListRelationFilterSchema';
import { BookingActivityLogListRelationFilterSchema } from './BookingActivityLogListRelationFilterSchema';
import { RefundRequestListRelationFilterSchema } from './RefundRequestListRelationFilterSchema';
import { ApiUsageLogListRelationFilterSchema } from './ApiUsageLogListRelationFilterSchema';
import { ApiUsageStatListRelationFilterSchema } from './ApiUsageStatListRelationFilterSchema';
import { AppListRelationFilterSchema } from './AppListRelationFilterSchema';
import { AppInstallListRelationFilterSchema } from './AppInstallListRelationFilterSchema';
import { OAuthTokenListRelationFilterSchema } from './OAuthTokenListRelationFilterSchema';
import { BookingTemplateListRelationFilterSchema } from './BookingTemplateListRelationFilterSchema';
import { UiTemplateListRelationFilterSchema } from './UiTemplateListRelationFilterSchema';
import { CancellationPolicyListRelationFilterSchema } from './CancellationPolicyListRelationFilterSchema';

export const MerchantWhereInputSchema: z.ZodType<Prisma.MerchantWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MerchantWhereInputSchema),z.lazy(() => MerchantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MerchantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MerchantWhereInputSchema),z.lazy(() => MerchantWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessType: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  tradingName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  vatNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  industry: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isVerified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  verifiedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  disabledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  MerchantContact: z.lazy(() => MerchantContactListRelationFilterSchema).optional(),
  MerchantUser: z.lazy(() => MerchantUserListRelationFilterSchema).optional(),
  MerchantAsset: z.lazy(() => MerchantAssetListRelationFilterSchema).optional(),
  ApiKey: z.lazy(() => ApiKeyListRelationFilterSchema).optional(),
  ResourceTemplate: z.lazy(() => ResourceTemplateListRelationFilterSchema).optional(),
  Resource: z.lazy(() => ResourceListRelationFilterSchema).optional(),
  Rate: z.lazy(() => RateListRelationFilterSchema).optional(),
  Discount: z.lazy(() => DiscountListRelationFilterSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsListRelationFilterSchema).optional(),
  Customer: z.lazy(() => CustomerListRelationFilterSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestListRelationFilterSchema).optional(),
  Booking: z.lazy(() => BookingListRelationFilterSchema).optional(),
  AddOn: z.lazy(() => AddOnListRelationFilterSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowListRelationFilterSchema).optional(),
  Notification: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  WebhookEndpoint: z.lazy(() => WebhookEndpointListRelationFilterSchema).optional(),
  WebhookEvent: z.lazy(() => WebhookEventListRelationFilterSchema).optional(),
  AuditLog: z.lazy(() => AuditLogListRelationFilterSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryListRelationFilterSchema).optional(),
  Invoice: z.lazy(() => InvoiceListRelationFilterSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogListRelationFilterSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestListRelationFilterSchema).optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogListRelationFilterSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatListRelationFilterSchema).optional(),
  App: z.lazy(() => AppListRelationFilterSchema).optional(),
  AppInstall: z.lazy(() => AppInstallListRelationFilterSchema).optional(),
  OAuthToken: z.lazy(() => OAuthTokenListRelationFilterSchema).optional(),
  BookingTemplate: z.lazy(() => BookingTemplateListRelationFilterSchema).optional(),
  UiTemplate: z.lazy(() => UiTemplateListRelationFilterSchema).optional(),
  CancellationPolicy: z.lazy(() => CancellationPolicyListRelationFilterSchema).optional()
}).strict();

export default MerchantWhereInputSchema;
