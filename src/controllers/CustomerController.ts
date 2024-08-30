import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ICustomerService from '../interfaces/ICustomerService';

class CustomerController {
  private customerService: ICustomerService;

  constructor(customerService: ICustomerService) {
    this.customerService = customerService;
  }

  async findAllMeasuresByCustomer(req: Request, res: Response) {
    const { customerCode } = req.params;
    const serviceResponse = await this.customerService.findAllMeasuresByCustomer(customerCode);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}

export default CustomerController;