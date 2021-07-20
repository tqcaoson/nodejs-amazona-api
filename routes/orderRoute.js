import express from 'express';
import { 
  isAuth, 
  isAdmin,
  isSellerOrAdmin,
} from '../middlewares/authMiddleware.js';
import { 
  getOrders, 
  thongKeOrder,
  getMyOrders, 
  getOrder, 
  deleteOrder, 
  createOrder, 
  payOrder, 
  deliverOrder,
} from '../controllers/orderController.js';

const router = express.Router(); 

router.get("/", isAuth, isSellerOrAdmin, getOrders);

router.get("/mine", isAuth, getMyOrders); 

router.get('/summary', isAuth, isAdmin, thongKeOrder); 

router.get("/:id", isAuth, getOrder);

router.delete("/:id", isAuth, isAdmin, deleteOrder);

router.post("/", isAuth, createOrder);

router.put("/:id/pay", isAuth, payOrder);

router.put('/:id/deliver', isAuth, isAdmin, deliverOrder);

export default router;