import { z } from 'zod';

export const BookingItemScalarFieldEnumSchema = z.enum(['id','bookingId','startTime','endTime','bookingRateSnapshotId','status','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingItemScalarFieldEnumSchema;
