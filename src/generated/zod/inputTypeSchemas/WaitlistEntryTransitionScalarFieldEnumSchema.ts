import { z } from 'zod';

export const WaitlistEntryTransitionScalarFieldEnumSchema = z.enum(['id','waitlistEntryId','fromStatus','toStatus','reason','notes','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default WaitlistEntryTransitionScalarFieldEnumSchema;
