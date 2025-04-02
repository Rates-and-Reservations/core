import webhookEventLogRoutes from './webhookEventLog/webhookEventLog.routes';
import webhookEventRoutes from './webhookEvent/webhookEvent.routes';
import webhookEndpointRoutes from './webhookEndpoint/webhookEndpoint.routes';
import apiKeyRoutes from './apiKey/apiKey.routes';
import auditLogRoutes from './auditLog/auditLog.routes';
import bookingActivityLogRoutes from './bookingActivityLog/bookingActivityLog.routes';
import apiUsageStatRoutes from './apiUsageStat/apiUsageStat.routes';
import apiUsageLogRoutes from './apiUsageLog/apiUsageLog.routes';
import oAuthTokenRoutes from './oAuthToken/oAuthToken.routes';
import appInstallScopeRoutes from './appInstallScope/appInstallScope.routes';
import appScopeRoutes from './appScope/appScope.routes';
import appInstallRoutes from './appInstall/appInstall.routes';
import appRoutes from './app/app.routes';
import notificationTemplateRoutes from './notificationTemplate/notificationTemplate.routes';
import notificationRoutes from './notification/notification.routes';
import cancellationRequestRoutes from './cancellationRequest/cancellationRequest.routes';
import cancellationPolicyRoutes from './cancellationPolicy/cancellationPolicy.routes';
import refundLogRoutes from './refundLog/refundLog.routes';
import refundRequestRoutes from './refundRequest/refundRequest.routes';
import invoicePaymentRoutes from './invoicePayment/invoicePayment.routes';
import invoiceRoutes from './invoice/invoice.routes';
import paymentActionsRoutes from './paymentActions/paymentActions.routes';
import waitlistEntryRoutes from './waitlistEntry/waitlistEntry.routes';
import customerRoutes from './customer/customer.routes';
import bookingRateSnapshotRoutes from './bookingRateSnapshot/bookingRateSnapshot.routes';
import bookingAddOnRoutes from './bookingAddOn/bookingAddOn.routes';
import bookingItemAddOnRoutes from './bookingItemAddOn/bookingItemAddOn.routes';
import bookingRoutes from './booking/booking.routes';
import bookingItemRoutes from './bookingItem/bookingItem.routes';
import bookingRequestFlowRoutes from './bookingRequestFlow/bookingRequestFlow.routes';
import bookingRequestActionValueRoutes from './bookingRequestActionValue/bookingRequestActionValue.routes';
import bookingRequestRoutes from './bookingRequest/bookingRequest.routes';
import uiTemplateRoutes from './uiTemplate/uiTemplate.routes';
import bookingActionRoutes from './bookingAction/bookingAction.routes';
import bookingTemplateRoutes from './bookingTemplate/bookingTemplate.routes';
import discountRoutes from './discount/discount.routes';
import rateAddOnRoutes from './rateAddOn/rateAddOn.routes';
import rateRoutes from './rate/rate.routes';
import resourceAssetRoutes from './resourceAsset/resourceAsset.routes';
import addOnRoutes from './addOn/addOn.routes';
import resourceBookingConfigRoutes from './resourceBookingConfig/resourceBookingConfig.routes';
import resourceRoutes from './resource/resource.routes';
import resourceTemplateRoutes from './resourceTemplate/resourceTemplate.routes';
import merchantAssetRoutes from './merchantAsset/merchantAsset.routes';
import merchantUserRoutes from './merchantUser/merchantUser.routes';
import merchantContactRoutes from './merchantContact/merchantContact.routes';
import merchantRoutes from './merchant/merchant.routes';
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

export default router;
