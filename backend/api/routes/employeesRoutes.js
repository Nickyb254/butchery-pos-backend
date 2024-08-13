import express from "express";
const router = express.Router();
import checkAuth from '../middleware/check-auth.js';
import {employeeLogIn, getAllEmployees} from '../controllers/employees.js';
import {createEmployee} from '../controllers/employees.js';
import {getOneEmployee} from '../controllers/employees.js';
import {updateEmployee} from '../controllers/employees.js';
import {deleteEmployee} from '../controllers/employees.js';

//controller
router.get('/', getAllEmployees);
router.post('/signup',  createEmployee);  //checkAuth,
router.post('/login', employeeLogIn)
router.get('/:employeeId', getOneEmployee);
router.patch('/:employeesId',  updateEmployee);//checkAuth,
router.delete('/:employeesId',  deleteEmployee);//checkAuth,

export default router;