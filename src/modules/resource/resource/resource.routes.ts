import { Router } from "express";
import * as controller from "./resource.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(controller.listResources));
router.post("/", asyncHandler(controller.createResource));
router.get("/:id", asyncHandler(controller.getResource));
router.put("/:id", asyncHandler(controller.updateResource));
router.delete("/:id", asyncHandler(controller.deleteResource));
router.get("/:id/rates", asyncHandler(controller.getResourceRates));
router.post("/:id/check-availability", asyncHandler(controller.checkAvailability));

export default router;