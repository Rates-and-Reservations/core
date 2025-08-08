import { z } from 'zod';

export const CurrencyScalarFieldEnumSchema = z.enum(['id','code','name','symbol','exchangeRate','isActive','createdAt','updatedAt']);

export default CurrencyScalarFieldEnumSchema;
