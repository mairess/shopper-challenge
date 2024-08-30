import ICustomerResponse from './ICustomerResponse';

interface ICustomerModel {
  findAllCustomerMeasures(customerCode: string): Promise<ICustomerResponse | null>
  findAllCustomerMeasuresByMeasureType(customerCode: string, measureType: string): Promise<ICustomerResponse | null>
}

export default ICustomerModel;