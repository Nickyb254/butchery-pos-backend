import express from "express";
const router = express.Router();
import checkAuth from '../middleware/check-auth.js';
import {getAllEmployees} from '../controllers/employees.js';
import {createEmployee} from '../controllers/employees.js';
import {getOneEmployee} from '../controllers/employees.js';
import {updateEmployee} from '../controllers/employees.js';
import {deleteEmployee} from '../controllers/employees.js';

//controller
router.get('/', getAllEmployees);
router.post('/',  createEmployee);  //checkAuth,
router.get('/:employeeId', getOneEmployee);
router.patch('/:employeesId', checkAuth, updateEmployee);
router.delete('/:employeesId', checkAuth, deleteEmployee);

export default router;