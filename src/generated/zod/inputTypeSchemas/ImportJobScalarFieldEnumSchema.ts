import { z } from 'zod';

export const ImportJobScalarFieldEnumSchema = z.enum(['id','merchantId','jobType','fileName','status','totalRows','processedRows','errorRows','errors','startedAt','completedAt','createdAt','updatedAt']);

export default ImportJobScalarFieldEnumSchema;
