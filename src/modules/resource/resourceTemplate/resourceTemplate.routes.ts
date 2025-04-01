import { Router } from "express";
import * as controller from "./resourceTemplate.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(controller.listResourcesTemplate));
router.post("/", asyncHandler(controller.createResourceTemplate));
router.get("/:id", asyncHandler(controller.getResourceTemplate));
router.put("/:id", asyncHandler(controller.updateResourceTemplate));
router.delete("/:id", asyncHandler(controller.deleteResourceTemplate));
router.post("/:id/clone", asyncHandler(controller.cloneResourceTemplate));

export default router;