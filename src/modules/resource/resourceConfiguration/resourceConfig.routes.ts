import { Router } from "express";
import * as controller from "./resourceConfig.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(controller.listResourcesConfig));
router.post("/", asyncHandler(controller.createResourceConfig));
router.get("/:id", asyncHandler(controller.getResourceConfig));
router.put("/:id", asyncHandler(controller.updateResourceConfig));
router.delete("/:id", asyncHandler(controller.deleteResourceConfig));

export default router;