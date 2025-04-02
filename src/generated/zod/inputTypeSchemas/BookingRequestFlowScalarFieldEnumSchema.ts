import { z } from 'zod';

export const BookingRequestFlowScalarFieldEnumSchema = z.enum(['id','bookingRequestId','merchantId','uiTemplateId','slug','usageLimit','usageCount','webhookUrl','webhookEvents','isActive','expiresAt','createdAt','updatedAt']);

export default BookingRequestFlowScalarFieldEnumSchema;
