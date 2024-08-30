import { Request, Response, Router } from 'express';
import CustomerController from '../controllers/CustomerController';
import CustomerModel from '../models/CustomerModel';
import CustomerService from '../services/CustomerService';
import Validator from '../middlewares/Validator';

const customerModel = new CustomerModel();
const customerService = new CustomerService(customerModel);
const customerController = new CustomerController(customerService);

const router = Router();

router.get('/:customerCode/list', Validator.validateQueryParam, (req: Request, res: Response) => customerController.findAllCustomerMeasures(req, res));

export default router;