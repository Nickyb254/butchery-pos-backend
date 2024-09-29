import express from "express";
const router = express.Router();

import { getAllOrders, getOneOrder } from "../controllers/orders.js";

router.get('/:orderId', getOneOrder)
router.get('/', getAllOrders)

export default router;