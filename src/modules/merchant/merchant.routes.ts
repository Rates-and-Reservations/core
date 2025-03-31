import { Router } from "express";
import * as controller from "./merchant.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(controller.createMerchant));
router.get("/", asyncHandler(controller.getMerchants));
router.get("/:id", asyncHandler(controller.getMerchant));
router.put("/:id", asyncHandler(controller.updateMerchant));
router.delete("/:id", asyncHandler(controller.deleteMerchant));
router.put("/:id/disable", asyncHandler(controller.disableMerchanr));
router.put("/:id/enable", asyncHandler(controller.enableMerchant));
router.put("/:id/verify", asyncHandler(controller.verifyMerchant));
router.put("/:id/unverify", asyncHandler(controller.unverifyMerchant));

export default router;