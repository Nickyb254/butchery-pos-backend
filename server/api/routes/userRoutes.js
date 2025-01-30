import express from 'express';
const router = express.Router();
import checkAuth from '../middleware/check-auth.js';
import { createUser } from '../controllers/users.js';
import { userLogIn } from '../controllers/users.js';
import { deleteUser} from '../controllers/users.js';
import { userLogOut} from '../controllers/users.js';
import {handleRefreshToken } from '../controllers/users.js';
import {forgotPassword } from '../controllers/users.js';
import {resetPassword } from '../controllers/users.js';
import { addRolesToEmployee } from "../controllers/employees.js";
import { disableEmployee } from "../controllers/employees.js";


router.post('/signup',  createUser);  
router.post('/login', userLogIn);
router.get('/refresh', handleRefreshToken);//checkAuth,
router.post('/logout', userLogOut);
router.post('/forgot-password', forgotPassword);
router.patch('/password-reset/:token', resetPassword);
router.delete ('/:userId', deleteUser);//checkAuth,
//admin priviledges over employee
router.patch('/change-roles/:id',  addRolesToEmployee);//checkAuth,
router.patch('/disable/:id',  disableEmployee);//checkAuth,

export default router;