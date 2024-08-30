/* eslint-disable max-len */
import { ServiceResponseErrorMessage, ServiceResponse } from '../types/ServiceResponse';
import ICustomerResponse from './ICustomerResponse';

interface ICustomerService {
  findAllMeasuresByCustomer(customerCode: string): Promise<ServiceResponse<ICustomerResponse | ServiceResponseErrorMessage>>
}

export default ICustomerService;