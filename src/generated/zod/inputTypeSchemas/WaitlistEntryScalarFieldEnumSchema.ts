import { z } from 'zod';

export const WaitlistEntryScalarFieldEnumSchema = z.enum(['id','merchantId','resourceId','customerId','desiredStartTime','desiredEndTime','partySize','currentStatus','notes','priority','notifiedAt','promotedAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default WaitlistEntryScalarFieldEnumSchema;
