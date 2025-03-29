import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BusinessTypeSchema } from './BusinessTypeSchema';
import { EnumBusinessTypeFieldUpdateOperationsInputSchema } from './EnumBusinessTypeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantContactUpdateManyWithoutMerchantNestedInputSchema } from './MerchantContactUpdateManyWithoutMerchantNestedInputSchema';
import { MerchantUserUpdateManyWithoutMerchantNestedInputSchema } from './MerchantUserUpdateManyWithoutMerchantNestedInputSchema';
import { MerchantAssetUpdateManyWithoutMerchantNestedInputSchema } from './MerchantAssetUpdateManyWithoutMerchantNestedInputSchema';
import { ApiKeyUpdateManyWithoutMerchantNestedInputSchema } from './ApiKeyUpdateManyWithoutMerchantNestedInputSchema';
import { ResourceTemplateUpdateManyWithoutMerchantNestedInputSchema } from './ResourceTemplateUpdateManyWithoutMerchantNestedInputSchema';
import { ResourceUpdateManyWithoutMerchantNestedInputSchema } from './ResourceUpdateManyWithoutMerchantNestedInputSchema';
import { RateUpdateManyWithoutMerchantNestedInputSchema } from './RateUpdateManyWithoutMerchantNestedInputSchema';
import { DiscountUpdateManyWithoutMerchantNestedInputSchema } from './DiscountUpdateManyWithoutMerchantNestedInputSchema';
import { PaymentActionsUpdateManyWithoutMerchantNestedInputSchema } from './PaymentActionsUpdateManyWithoutMerchantNestedInputSchema';
import { CustomerUpdateManyWithoutMerchantNestedInputSchema } from './CustomerUpdateManyWithoutMerchantNestedInputSchema';
import { BookingRequestUpdateManyWithoutMerchantNestedInputSchema } from './BookingRequestUpdateManyWithoutMerchantNestedInputSchema';
import { BookingUpdateManyWithoutMerchantNestedInputSchema } from './BookingUpdateManyWithoutMerchantNestedInputSchema';
import { AddOnUpdateManyWithoutMerchantNestedInputSchema } from './AddOnUpdateManyWithoutMerchantNestedInputSchema';
import { BookingRequestFlowUpdateManyWithoutMerchantNestedInputSchema } from './BookingRequestFlowUpdateManyWithoutMerchantNestedInputSchema';
import { NotificationUpdateManyWithoutMerchantNestedInputSchema } from './NotificationUpdateManyWithoutMerchantNestedInputSchema';
import { WebhookEndpointUpdateManyWithoutMerchantNestedInputSchema } from './WebhookEndpointUpdateManyWithoutMerchantNestedInputSchema';
import { WebhookEventUpdateManyWithoutMerchantNestedInputSchema } from './WebhookEventUpdateManyWithoutMerchantNestedInputSchema';
import { AuditLogUpdateManyWithoutMerchantNestedInputSchema } from './AuditLogUpdateManyWithoutMerchantNestedInputSchema';
import { WaitlistEntryUpdateManyWithoutMerchantNestedInputSchema } from './WaitlistEntryUpdateManyWithoutMerchantNestedInputSchema';
import { InvoiceUpdateManyWithoutMerchantNestedInputSchema } from './InvoiceUpdateManyWithoutMerchantNestedInputSchema';
import { BookingActivityLogUpdateManyWithoutMerchantNestedInputSchema } from './BookingActivityLogUpdateManyWithoutMerchantNestedInputSchema';
import { RefundRequestUpdateManyWithoutMerchantNestedInputSchema } from './RefundRequestUpdateManyWithoutMerchantNestedInputSchema';
import { ApiUsageLogUpdateManyWithoutMerchantNestedInputSchema } from './ApiUsageLogUpdateManyWithoutMerchantNestedInputSchema';
import { ApiUsageStatUpdateManyWithoutMerchantNestedInputSchema } from './ApiUsageStatUpdateManyWithoutMerchantNestedInputSchema';
import { AppUpdateManyWithoutMerchantNestedInputSchema } from './AppUpdateManyWithoutMerchantNestedInputSchema';
import { AppInstallUpdateManyWithoutMerchantNestedInputSchema } from './AppInstallUpdateManyWithoutMerchantNestedInputSchema';
import { BookingTemplateUpdateManyWithoutMerchantNestedInputSchema } from './BookingTemplateUpdateManyWithoutMerchantNestedInputSchema';
import { UiTemplateUpdateManyWithoutMerchantNestedInputSchema } from './UiTemplateUpdateManyWithoutMerchantNestedInputSchema';
import { CancellationPolicyUpdateManyWithoutMerchantNestedInputSchema } from './CancellationPolicyUpdateManyWithoutMerchantNestedInputSchema';

export const MerchantUpdateWithoutOAuthTokenInputSchema: z.ZodType<Prisma.MerchantUpdateWithoutOAuthTokenInput> = z.object({
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
  MerchantContact: z.lazy(() => MerchantContactUpdateManyWithoutMerchantNestedInputSchema).optional(),
  MerchantUser: z.lazy(() => MerchantUserUpdateManyWithoutMerchantNestedInputSchema).optional(),
  MerchantAsset: z.lazy(() => MerchantAssetUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ApiKey: z.lazy(() => ApiKeyUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ResourceTemplate: z.lazy(() => ResourceTemplateUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Resource: z.lazy(() => ResourceUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Rate: z.lazy(() => RateUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Discount: z.lazy(() => DiscountUpdateManyWithoutMerchantNestedInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Customer: z.lazy(() => CustomerUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUpdateManyWithoutMerchantNestedInputSchema).optional(),
  AddOn: z.lazy(() => AddOnUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Notification: z.lazy(() => NotificationUpdateManyWithoutMerchantNestedInputSchema).optional(),
  WebhookEndpoint: z.lazy(() => WebhookEndpointUpdateManyWithoutMerchantNestedInputSchema).optional(),
  WebhookEvent: z.lazy(() => WebhookEventUpdateManyWithoutMerchantNestedInputSchema).optional(),
  AuditLog: z.lazy(() => AuditLogUpdateManyWithoutMerchantNestedInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUpdateManyWithoutMerchantNestedInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogUpdateManyWithoutMerchantNestedInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogUpdateManyWithoutMerchantNestedInputSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatUpdateManyWithoutMerchantNestedInputSchema).optional(),
  App: z.lazy(() => AppUpdateManyWithoutMerchantNestedInputSchema).optional(),
  AppInstall: z.lazy(() => AppInstallUpdateManyWithoutMerchantNestedInputSchema).optional(),
  BookingTemplate: z.lazy(() => BookingTemplateUpdateManyWithoutMerchantNestedInputSchema).optional(),
  UiTemplate: z.lazy(() => UiTemplateUpdateManyWithoutMerchantNestedInputSchema).optional(),
  CancellationPolicy: z.lazy(() => CancellationPolicyUpdateManyWithoutMerchantNestedInputSchema).optional()
}).strict();

export default MerchantUpdateWithoutOAuthTokenInputSchema;
