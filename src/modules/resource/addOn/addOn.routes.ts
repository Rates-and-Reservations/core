import { Router } from "express";
import * as controller from "./addOn.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(controller.listAddOns));
router.post("/", asyncHandler(controller.createAddOn));
router.get("/:id", asyncHandler(controller.getAddOn));
router.put("/:id", asyncHandler(controller.updateAddOn));
router.delete("/:id", asyncHandler(controller.deleteAddOn));

export default router;