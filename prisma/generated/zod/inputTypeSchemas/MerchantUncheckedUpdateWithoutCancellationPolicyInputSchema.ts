import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { EnumBusinessTypeFieldUpdateOperationsInputSchema } from './EnumBusinessTypeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantContactUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './MerchantContactUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { MerchantUserUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './MerchantUserUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { MerchantAssetUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './MerchantAssetUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { ApiKeyUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './ApiKeyUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { ResourceTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './ResourceTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { ResourceUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './ResourceUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { RateUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './RateUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { DiscountUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './DiscountUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { PaymentActionsUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './PaymentActionsUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { CustomerUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './CustomerUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { BookingRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './BookingRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { BookingUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './BookingUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { AddOnUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './AddOnUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { BookingRequestFlowUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './BookingRequestFlowUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { NotificationUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { WebhookEndpointUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './WebhookEndpointUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { WebhookEventUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './WebhookEventUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { AuditLogUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './AuditLogUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { WaitlistEntryUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './WaitlistEntryUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { InvoiceUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './InvoiceUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { BookingActivityLogUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './BookingActivityLogUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { RefundRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './RefundRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { ApiUsageLogUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './ApiUsageLogUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { ApiUsageStatUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './ApiUsageStatUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { AppUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './AppUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { AppInstallUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './AppInstallUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { OAuthTokenUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './OAuthTokenUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { BookingTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './BookingTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema';
import { UiTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema } from './UiTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema';

export const MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.MerchantUncheckedUpdateWithoutCancellationPolicyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessType: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  tradingName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  vatNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MerchantContact: z.lazy(() => MerchantContactUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  MerchantUser: z.lazy(() => MerchantUserUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  MerchantAsset: z.lazy(() => MerchantAssetUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ApiKey: z.lazy(() => ApiKeyUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ResourceTemplate: z.lazy(() => ResourceTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Resource: z.lazy(() => ResourceUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Rate: z.lazy(() => RateUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Discount: z.lazy(() => DiscountUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Customer: z.lazy(() => CustomerUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  AddOn: z.lazy(() => AddOnUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Notification: z.lazy(() => NotificationUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  WebhookEndpoint: z.lazy(() => WebhookEndpointUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  WebhookEvent: z.lazy(() => WebhookEventUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  AuditLog: z.lazy(() => AuditLogUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  App: z.lazy(() => AppUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  AppInstall: z.lazy(() => AppInstallUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  OAuthToken: z.lazy(() => OAuthTokenUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingTemplate: z.lazy(() => BookingTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional(),
  UiTemplate: z.lazy(() => UiTemplateUncheckedUpdateManyWithoutMerchantNestedInputSchema).optional()
}).strict();

export default MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema;
