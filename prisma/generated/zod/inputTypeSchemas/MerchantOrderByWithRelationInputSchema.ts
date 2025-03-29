import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantContactOrderByRelationAggregateInputSchema } from './MerchantContactOrderByRelationAggregateInputSchema';
import { MerchantUserOrderByRelationAggregateInputSchema } from './MerchantUserOrderByRelationAggregateInputSchema';
import { MerchantAssetOrderByRelationAggregateInputSchema } from './MerchantAssetOrderByRelationAggregateInputSchema';
import { ApiKeyOrderByRelationAggregateInputSchema } from './ApiKeyOrderByRelationAggregateInputSchema';
import { ResourceTemplateOrderByRelationAggregateInputSchema } from './ResourceTemplateOrderByRelationAggregateInputSchema';
import { ResourceOrderByRelationAggregateInputSchema } from './ResourceOrderByRelationAggregateInputSchema';
import { RateOrderByRelationAggregateInputSchema } from './RateOrderByRelationAggregateInputSchema';
import { DiscountOrderByRelationAggregateInputSchema } from './DiscountOrderByRelationAggregateInputSchema';
import { PaymentActionsOrderByRelationAggregateInputSchema } from './PaymentActionsOrderByRelationAggregateInputSchema';
import { CustomerOrderByRelationAggregateInputSchema } from './CustomerOrderByRelationAggregateInputSchema';
import { BookingRequestOrderByRelationAggregateInputSchema } from './BookingRequestOrderByRelationAggregateInputSchema';
import { BookingOrderByRelationAggregateInputSchema } from './BookingOrderByRelationAggregateInputSchema';
import { AddOnOrderByRelationAggregateInputSchema } from './AddOnOrderByRelationAggregateInputSchema';
import { BookingRequestFlowOrderByRelationAggregateInputSchema } from './BookingRequestFlowOrderByRelationAggregateInputSchema';
import { NotificationOrderByRelationAggregateInputSchema } from './NotificationOrderByRelationAggregateInputSchema';
import { WebhookEndpointOrderByRelationAggregateInputSchema } from './WebhookEndpointOrderByRelationAggregateInputSchema';
import { WebhookEventOrderByRelationAggregateInputSchema } from './WebhookEventOrderByRelationAggregateInputSchema';
import { AuditLogOrderByRelationAggregateInputSchema } from './AuditLogOrderByRelationAggregateInputSchema';
import { WaitlistEntryOrderByRelationAggregateInputSchema } from './WaitlistEntryOrderByRelationAggregateInputSchema';
import { InvoiceOrderByRelationAggregateInputSchema } from './InvoiceOrderByRelationAggregateInputSchema';
import { BookingActivityLogOrderByRelationAggregateInputSchema } from './BookingActivityLogOrderByRelationAggregateInputSchema';
import { RefundRequestOrderByRelationAggregateInputSchema } from './RefundRequestOrderByRelationAggregateInputSchema';
import { ApiUsageLogOrderByRelationAggregateInputSchema } from './ApiUsageLogOrderByRelationAggregateInputSchema';
import { ApiUsageStatOrderByRelationAggregateInputSchema } from './ApiUsageStatOrderByRelationAggregateInputSchema';
import { AppOrderByRelationAggregateInputSchema } from './AppOrderByRelationAggregateInputSchema';
import { AppInstallOrderByRelationAggregateInputSchema } from './AppInstallOrderByRelationAggregateInputSchema';
import { OAuthTokenOrderByRelationAggregateInputSchema } from './OAuthTokenOrderByRelationAggregateInputSchema';
import { BookingTemplateOrderByRelationAggregateInputSchema } from './BookingTemplateOrderByRelationAggregateInputSchema';
import { UiTemplateOrderByRelationAggregateInputSchema } from './UiTemplateOrderByRelationAggregateInputSchema';
import { CancellationPolicyOrderByRelationAggregateInputSchema } from './CancellationPolicyOrderByRelationAggregateInputSchema';

export const MerchantOrderByWithRelationInputSchema: z.ZodType<Prisma.MerchantOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  businessType: z.lazy(() => SortOrderSchema).optional(),
  tradingName: z.lazy(() => SortOrderSchema).optional(),
  vatNumber: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  logo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  industry: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  isVerified: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  verifiedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  disabledAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  MerchantContact: z.lazy(() => MerchantContactOrderByRelationAggregateInputSchema).optional(),
  MerchantUser: z.lazy(() => MerchantUserOrderByRelationAggregateInputSchema).optional(),
  MerchantAsset: z.lazy(() => MerchantAssetOrderByRelationAggregateInputSchema).optional(),
  ApiKey: z.lazy(() => ApiKeyOrderByRelationAggregateInputSchema).optional(),
  ResourceTemplate: z.lazy(() => ResourceTemplateOrderByRelationAggregateInputSchema).optional(),
  Resource: z.lazy(() => ResourceOrderByRelationAggregateInputSchema).optional(),
  Rate: z.lazy(() => RateOrderByRelationAggregateInputSchema).optional(),
  Discount: z.lazy(() => DiscountOrderByRelationAggregateInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsOrderByRelationAggregateInputSchema).optional(),
  Customer: z.lazy(() => CustomerOrderByRelationAggregateInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestOrderByRelationAggregateInputSchema).optional(),
  Booking: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
  AddOn: z.lazy(() => AddOnOrderByRelationAggregateInputSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowOrderByRelationAggregateInputSchema).optional(),
  Notification: z.lazy(() => NotificationOrderByRelationAggregateInputSchema).optional(),
  WebhookEndpoint: z.lazy(() => WebhookEndpointOrderByRelationAggregateInputSchema).optional(),
  WebhookEvent: z.lazy(() => WebhookEventOrderByRelationAggregateInputSchema).optional(),
  AuditLog: z.lazy(() => AuditLogOrderByRelationAggregateInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryOrderByRelationAggregateInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceOrderByRelationAggregateInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogOrderByRelationAggregateInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestOrderByRelationAggregateInputSchema).optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogOrderByRelationAggregateInputSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatOrderByRelationAggregateInputSchema).optional(),
  App: z.lazy(() => AppOrderByRelationAggregateInputSchema).optional(),
  AppInstall: z.lazy(() => AppInstallOrderByRelationAggregateInputSchema).optional(),
  OAuthToken: z.lazy(() => OAuthTokenOrderByRelationAggregateInputSchema).optional(),
  BookingTemplate: z.lazy(() => BookingTemplateOrderByRelationAggregateInputSchema).optional(),
  UiTemplate: z.lazy(() => UiTemplateOrderByRelationAggregateInputSchema).optional(),
  CancellationPolicy: z.lazy(() => CancellationPolicyOrderByRelationAggregateInputSchema).optional()
}).strict();

export default MerchantOrderByWithRelationInputSchema;
