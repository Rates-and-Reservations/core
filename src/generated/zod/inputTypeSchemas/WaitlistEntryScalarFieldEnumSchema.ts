import { z } from 'zod';

export const WaitlistEntryScalarFieldEnumSchema = z.enum(['id','merchantId','resourceId','customerId','desiredStartTime','desiredEndTime','notes','status','priority','notifiedAt','promotedAt','createdAt','updatedAt']);

export default WaitlistEntryScalarFieldEnumSchema;
