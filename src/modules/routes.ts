import notificationLogRoutes from './notificationLog/notificationLog.routes';
import waitlistEntryTransitionRoutes from './waitlistEntryTransition/waitlistEntryTransition.routes';
import bookingTransitionRoutes from './Booking/bookingTransition/bookingTransition.routes';
import bookingItemTransitionRoutes from './Booking/bookingItemTransition/bookingItemTransition.routes';
import webhookEventLogRoutes from './Developers/webhookEventLog/webhookEventLog.routes';
import webhookEventRoutes from './Developers/webhookEvent/webhookEvent.routes';
import webhookEndpointRoutes from './Developers/webhookEndpoint/webhookEndpoint.routes';
import apiKeyRoutes from './Developers/apiKey/apiKey.routes';
import auditLogRoutes from './Events/auditLog/auditLog.routes';
import bookingActivityLogRoutes from './Events/bookingActivityLog/bookingActivityLog.routes';
import apiUsageStatRoutes from './Events/apiUsageStat/apiUsageStat.routes';
import apiUsageLogRoutes from './Events/apiUsageLog/apiUsageLog.routes';
import oAuthTokenRoutes from './App/oAuthToken/oAuthToken.routes';
import appInstallScopeRoutes from './App/appInstallScope/appInstallScope.routes';
import appScopeRoutes from './App/appScope/appScope.routes';
import appInstallRoutes from './App/appInstall/appInstall.routes';
import appRoutes from './App/app/app.routes';
import notificationTemplateRoutes from './Notification/notificationTemplate/notificationTemplate.routes';
import notificationRoutes from './Notification/notification/notification.routes';
import cancellationRequestRoutes from './Booking/cancellationRequest/cancellationRequest.routes';
import cancellationPolicyRoutes from './Booking/cancellationPolicy/cancellationPolicy.routes';
import refundLogRoutes from './Payment/refundLog/refundLog.routes';
import refundRequestRoutes from './Payment/refundRequest/refundRequest.routes';
import invoicePaymentRoutes from './Payment/invoicePayment/invoicePayment.routes';
import invoiceRoutes from './Payment/invoice/invoice.routes';
import paymentActionsRoutes from './Payment/paymentActions/paymentActions.routes';
import waitlistEntryRoutes from './Waitlist/waitlistEntry/waitlistEntry.routes';
import customerRoutes from './Customer/customer/customer.routes';
import bookingRateSnapshotRoutes from './Booking/bookingRateSnapshot/bookingRateSnapshot.routes';
import bookingAddOnRoutes from './Booking/bookingAddOn/bookingAddOn.routes';
import bookingItemAddOnRoutes from './Booking/bookingItemAddOn/bookingItemAddOn.routes';
import bookingRoutes from './Booking/booking/booking.routes';
import bookingItemRoutes from './Booking/bookingItem/bookingItem.routes';
import bookingRequestFlowRoutes from './BookingSetup/bookingRequestFlow/bookingRequestFlow.routes';
import bookingRequestActionValueRoutes from './BookingSetup/bookingRequestActionValue/bookingRequestActionValue.routes';
import bookingRequestRoutes from './BookingSetup/bookingRequest/bookingRequest.routes';
import uiTemplateRoutes from './BookingConfiguration/uiTemplate/uiTemplate.routes';
import bookingActionRoutes from './BookingConfiguration/bookingAction/bookingAction.routes';
import bookingTemplateRoutes from './BookingConfiguration/bookingTemplate/bookingTemplate.routes';
import discountRoutes from './Pricing/discount/discount.routes';
import rateAddOnRoutes from './Pricing/rateAddOn/rateAddOn.routes';
import rateRoutes from './Pricing/rate/rate.routes';
import resourceAssetRoutes from './Inventory/resourceAsset/resourceAsset.routes';
import addOnRoutes from './Inventory/addOn/addOn.routes';
import resourceBookingConfigRoutes from './Inventory/resourceBookingConfig/resourceBookingConfig.routes';
import resourceRoutes from './Inventory/resource/resource.routes';
import resourceTemplateRoutes from './Inventory/resourceTemplate/resourceTemplate.routes';
import merchantAssetRoutes from './Merchant/merchantAsset/merchantAsset.routes';
import merchantUserRoutes from './Merchant/merchantUser/merchantUser.routes';
import merchantContactRoutes from './Merchant/merchantContact/merchantContact.routes';
import merchantRoutes from './Merchant/merchant/merchant.routes';
import express from 'express';
const router = express.Router();

router.use('/merchant', merchantRoutes);

router.use('/merchantContact', merchantContactRoutes);

router.use('/merchantUser', merchantUserRoutes);

router.use('/merchantAsset', merchantAssetRoutes);

router.use('/resourceTemplate', resourceTemplateRoutes);

router.use('/resource', resourceRoutes);

router.use('/resourceBookingConfig', resourceBookingConfigRoutes);

router.use('/addOn', addOnRoutes);

router.use('/resourceAsset', resourceAssetRoutes);

router.use('/rate', rateRoutes);

router.use('/rateAddOn', rateAddOnRoutes);

router.use('/discount', discountRoutes);

router.use('/bookingTemplate', bookingTemplateRoutes);

router.use('/bookingAction', bookingActionRoutes);

router.use('/uiTemplate', uiTemplateRoutes);

router.use('/bookingRequest', bookingRequestRoutes);

router.use('/bookingRequestActionValue', bookingRequestActionValueRoutes);

router.use('/bookingRequestFlow', bookingRequestFlowRoutes);

router.use('/bookingItem', bookingItemRoutes);

router.use('/booking', bookingRoutes);

router.use('/bookingItemAddOn', bookingItemAddOnRoutes);

router.use('/bookingAddOn', bookingAddOnRoutes);

router.use('/bookingRateSnapshot', bookingRateSnapshotRoutes);

router.use('/customer', customerRoutes);

router.use('/waitlistEntry', waitlistEntryRoutes);

router.use('/paymentActions', paymentActionsRoutes);

router.use('/invoice', invoiceRoutes);

router.use('/invoicePayment', invoicePaymentRoutes);

router.use('/refundRequest', refundRequestRoutes);

router.use('/refundLog', refundLogRoutes);

router.use('/cancellationPolicy', cancellationPolicyRoutes);

router.use('/cancellationRequest', cancellationRequestRoutes);

router.use('/notification', notificationRoutes);

router.use('/notificationTemplate', notificationTemplateRoutes);

router.use('/app', appRoutes);

router.use('/appInstall', appInstallRoutes);

router.use('/appScope', appScopeRoutes);

router.use('/appInstallScope', appInstallScopeRoutes);

router.use('/oAuthToken', oAuthTokenRoutes);

router.use('/apiUsageLog', apiUsageLogRoutes);

router.use('/apiUsageStat', apiUsageStatRoutes);

router.use('/bookingActivityLog', bookingActivityLogRoutes);

router.use('/auditLog', auditLogRoutes);

router.use('/apiKey', apiKeyRoutes);

router.use('/webhookEndpoint', webhookEndpointRoutes);

router.use('/webhookEvent', webhookEventRoutes);

router.use('/webhookEventLog', webhookEventLogRoutes);

router.use('/bookingItemTransition', bookingItemTransitionRoutes);

router.use('/bookingTransition', bookingTransitionRoutes);

router.use('/waitlistEntryTransition', waitlistEntryTransitionRoutes);

router.use('/notificationLog', notificationLogRoutes);

export default router;
