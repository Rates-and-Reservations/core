import { Router } from "express";
import * as controller from "./merchantUser.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(controller.listMerchantUsers));
router.post("/invite", asyncHandler(controller.inviteMerchantUser));
router.post("/:id/verify", asyncHandler(controller.verifyMerchantUser));
router.put("/:id/role", asyncHandler(controller.updateMerchantUserRole));
router.delete("/:id", asyncHandler(controller.deleteMerchantUser));

export default router;