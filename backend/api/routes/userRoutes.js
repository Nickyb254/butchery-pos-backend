import express from 'express';
const router = express.Router();
import checkAuth from '../middleware/check-auth.js';
import { createUser } from '../controllers/users.js';
import { userLogIn } from '../controllers/users.js';
import { deleteUser } from '../controllers/users.js';


router.post('/signup',  createUser);  
router.post('/login', userLogIn);
router.delete ('/:userId',checkAuth, deleteUser);

export default router;