import express from "express";

import {
    getStores,
    getStore,
    createRating,
    updateRating,
    updatePassword
} from "../controllers/user_controller.js";

const router = express.Router();

router.get("/stores", (req,res)=>{});
router.get("/stores/:id", );

router.post("/stores/:id/rating", );
router.put("/stores/:id/rating", );

router.put("/update_password", );

export default router;