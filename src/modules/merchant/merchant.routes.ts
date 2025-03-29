import { Router } from "express";
import * as controller from "./merchant.controller";

const router = Router();

router.post("/", controller.createMerchant);
router.get("/", controller.getMerchants);
router.get("/:id", controller.getMerchant);
router.put("/:id", controller.updateMerchant);
router.delete("/:id", controller.deleteMerchant);
router.put("/:id/disable", controller.disableMerchanr);
router.put("/:id/enable", controller.enableMerchant);
router.put("/:id/verify", controller.verifyMerchant);
router.put("/:id/unverify", controller.unverifyMerchant);
