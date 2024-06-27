import express from 'express';
const router = express.Router();
import checkAuth from '../middleware/check-auth.js';


router.post('/signup', checkAuth, createUser);  
router.post('/login', userLogIn);
router.delete ('/:userId',checkAuth, deleteUser);

export default router;