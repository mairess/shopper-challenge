/* eslint-disable max-len */
import ICustomerResponse from './ICustomerResponse';

interface ICustomerModel {
  findAllMeasuresByCustomer(customerCode: string): Promise<ICustomerResponse | null>
}

export default ICustomerModel;