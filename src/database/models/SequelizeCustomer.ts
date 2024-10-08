import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeMeasure from './SequelizeMesure';

class SequelizeCustomer extends Model<InferAttributes<SequelizeCustomer>,
InferCreationAttributes<SequelizeCustomer>> { 
  declare customer_code: CreationOptional<string>;

  declare name: string;
}

SequelizeCustomer.init({
  customer_code: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'customers',
  timestamps: false,
});

SequelizeCustomer.hasMany(SequelizeMeasure, { foreignKey: 'customer_code', as: 'measures' });

export default SequelizeCustomer;