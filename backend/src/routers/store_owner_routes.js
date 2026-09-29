import express from "express";

import {
    getStoreDashboard,
    getStoreRatings,
    updatePassword
} from "../controllers/store_owner_controller.js";

const router = express.Router();

router.get("/dashboard", getStoreDashboard);

router.get("/ratings", getStoreRatings);

router.put("/update_password", updatePassword);

export default router;