import express from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { 
    editUser, 
    signIn, 
    register, 
    createAdmin,
 } from '../controllers/userController.js';

const router = express.Router();  

router.put('/:id', isAuth, editUser);

router.post('/signin', signIn);

router.post('/register', register); 

router.get('/createadmin', createAdmin);

export default router;
