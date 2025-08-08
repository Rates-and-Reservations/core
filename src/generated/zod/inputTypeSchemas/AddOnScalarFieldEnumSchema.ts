import { z } from 'zod';

export const AddOnScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','price','currency','showInBooking','isActive','hasInventory','inventoryCount','lowStockWarning','isDeleted','deletedAt','createdAt','updatedAt']);

export default AddOnScalarFieldEnumSchema;
