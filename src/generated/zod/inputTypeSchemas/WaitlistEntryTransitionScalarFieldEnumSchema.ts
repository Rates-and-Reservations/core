import { z } from 'zod';

export const WaitlistEntryTransitionScalarFieldEnumSchema = z.enum(['id','waitlistEntryId','status','isDeleted','deletedAt','createdAt','updatedAt']);

export default WaitlistEntryTransitionScalarFieldEnumSchema;
