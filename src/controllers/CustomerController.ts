import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ICustomerService from '../interfaces/ICustomerService';

class CustomerController {
  private customerService: ICustomerService;

  constructor(customerService: ICustomerService) {
    this.customerService = customerService;
  }

  async findAllCustomerMeasures(req: Request, res: Response) {
    const { customerCode } = req.params;
    const { measure_type: measureType } = req.query;

    let serviceResponse;

    if (typeof measureType === 'string') {
      serviceResponse = await this.customerService.findAllCustomerMeasuresByMeasureType(customerCode, measureType);
    } else {
      serviceResponse = await this.customerService.findAllCustomerMeasures(customerCode);
    }

    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}

export default CustomerController;