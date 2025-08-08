import { z } from 'zod';

export const BookingRateSnapshotScalarFieldEnumSchema = z.enum(['id','rateId','name','description','price','currency','durationType','isDefault','isActive','validFrom','validTo','taxType','taxAmount','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingRateSnapshotScalarFieldEnumSchema;
