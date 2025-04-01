import { z } from 'zod';

export const UiTemplateScalarFieldEnumSchema = z.enum(['id','name','description','previewImageUrl','isSystem','merchantId','config','uiTheme','createdAt','updatedAt']);

export default UiTemplateScalarFieldEnumSchema;
