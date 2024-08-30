/* eslint-disable max-len */
import { ServiceResponseErrorMessage, ServiceResponse } from '../types/ServiceResponse';
import ICustomerResponse from './ICustomerResponse';

interface ICustomerService {
  findAllCustomerMeasures(customerCode: string): Promise<ServiceResponse<ICustomerResponse | ServiceResponseErrorMessage>>
  findAllCustomerMeasuresByMeasureType(customerCode: string, measureType: string): Promise<ServiceResponse<ICustomerResponse | ServiceResponseErrorMessage>>
}

export default ICustomerService;