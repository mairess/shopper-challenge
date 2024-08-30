import ICustomerModel from '../interfaces/ICustomerModel';
import ICustomerResponse from '../interfaces/ICustomerResponse';
import { ServiceResponse, ServiceResponseErrorMessage } from '../types/ServiceResponse';

class CustomerService {
  private customerModel: ICustomerModel;

  constructor(customerModel: ICustomerModel) {
    this.customerModel = customerModel;
  }

  public async findAllCustomerMeasures(customerCode: string): Promise<ServiceResponse<ICustomerResponse | ServiceResponseErrorMessage>> {
    const customer = await this.customerModel.findAllCustomerMeasures(customerCode);

    if (!customer) {
      return {
        status: 'MEASURES_NOT_FOUND',
        data: { error_code: 'MEASURE_NOT_FOUND', error_description: 'Nenhuma leitura encontrada' },
      };
    }

    return { status: 'SUCCESSFUL', data: customer };
  }

  public async findAllCustomerMeasuresByMeasureType(customerCode: string, measureType: string): Promise<ServiceResponse<ICustomerResponse | ServiceResponseErrorMessage>> {
    const customer = await this.customerModel.findAllCustomerMeasuresByMeasureType(customerCode, measureType);

    if (!customer) {
      return {
        status: 'MEASURES_NOT_FOUND',
        data: { error_code: 'MEASURES_NOT_FOUND', error_description: 'Nenhuma leitura encontrada' },
      };
    }

    return { status: 'SUCCESSFUL', data: customer };
  }
}

export default CustomerService;