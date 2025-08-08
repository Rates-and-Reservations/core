import { z } from 'zod';

export const UiTemplateScalarFieldEnumSchema = z.enum(['id','name','description','previewImageUrl','isSystem','merchantId','config','uiTheme','isDeleted','deletedAt','createdAt','updatedAt']);

export default UiTemplateScalarFieldEnumSchema;
