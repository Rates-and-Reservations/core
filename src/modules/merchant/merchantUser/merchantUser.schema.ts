import MerchantUserSchema from "prisma/generated/zod/modelSchema/MerchantUserSchema";
import { z } from "zod";

export const CreateMerchantUSerSchema = MerchantUserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateMerchantUserSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
});

export type CreateMerchantContactInput = z.infer<typeof CreateMerchantUSerSchema>;
export type UpdateMerchantContactInput = z.infer<typeof UpdateMerchantUserSchema>;
