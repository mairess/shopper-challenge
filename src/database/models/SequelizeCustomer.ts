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
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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

SequelizeMeasure.belongsTo(SequelizeCustomer, { foreignKey: 'measure_uuid', as: 'measure' });

SequelizeCustomer.hasMany(SequelizeMeasure, { foreignKey: 'measure_uuid', as: 'measure' });

export default SequelizeCustomer;