import SequelizeCustomer from '../database/models/SequelizeCustomer';
import SequelizeMeasure from '../database/models/SequelizeMesure';
import ICustomerModel from '../interfaces/ICustomerModel';
import ICustomerResponse from '../interfaces/ICustomerResponse';

class CustomerModel implements ICustomerModel {
  private model = SequelizeCustomer;

  public async findAllCustomerMeasures(customerCode: string): Promise<ICustomerResponse | null> {
    const customer = await this.model.findOne({
      where: { customer_code: customerCode },
      attributes: { exclude: ['name'] },
      include: [
        { 
          model: SequelizeMeasure, 
          as: 'measures',
          attributes: { exclude: ['customer_code', 'measure_value'] },
        },
      ],
    });

    if (!customer) return null;

    return customer;
  }

  public async findAllCustomerMeasuresByMeasureType(customerCode: string, measureType: string): Promise<ICustomerResponse | null> {
    const customer = await this.model.findOne({
      where: { customer_code: customerCode },
      attributes: { exclude: ['name'] },
      include: [
        { 
          model: SequelizeMeasure, 
          as: 'measures',
          where: { measure_type: measureType },
          attributes: { exclude: ['customer_code', 'measure_value'] },
        },
      ],
    });

    if (!customer) return null;

    return customer;
  }
}

export default CustomerModel;