import express from 'express';
import { 
  getProducts, 
  getOneProduct, 
  postReviewsProduct, 
  editProduct, 
  deleteProduct, 
  createProduct } from '../controllers/productController.js'
import { isAuth, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router(); 

router.get('/', getProducts);

router.get('/:id', getOneProduct);

router.post('/:id/reviews', isAuth, postReviewsProduct);

router.post('/', isAuth, isAdmin, createProduct);

router.put('/:id', isAuth, isAdmin, editProduct);

router.delete('/:id', isAuth, isAdmin, deleteProduct);

export default router;
