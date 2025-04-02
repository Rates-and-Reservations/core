import { z } from 'zod';

export const BookingItemScalarFieldEnumSchema = z.enum(['id','bookingId','startTime','endTime','bookingRateSnapshotId','status','createdAt','updatedAt']);

export default BookingItemScalarFieldEnumSchema;
