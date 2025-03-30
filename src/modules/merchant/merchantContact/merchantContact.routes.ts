import { Router } from "express";
import * as controller from "./merchantContact.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(controller.listMerchantContacts));
router.get("/:id", asyncHandler(controller.getMerchantContactById));
router.post("/", asyncHandler(controller.createMerchantContact));
router.put("/:id", asyncHandler(controller.updateMerchantContact));
router.delete("/:id", asyncHandler(controller.deleteMerchantContact));
router.post("/:id/default", asyncHandler(controller.markAsDefault));

export default router;