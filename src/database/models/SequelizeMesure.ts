import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeMeasure extends Model<InferAttributes<SequelizeMeasure>, InferCreationAttributes<SequelizeMeasure>> {
  declare measure_uuid: CreationOptional<string>;

  declare measure_datetime: Date;

  declare measure_type: 'WATER' | 'GAS';

  declare measure_value: number;

  declare has_confirmed: boolean;
  
  declare image_url: string;

  declare customer_code?: string;
}

SequelizeMeasure.init({
  measure_uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  measure_datetime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  measure_type: {
    type: DataTypes.ENUM('WATER', 'GAS'),
    allowNull: false,
  },
  measure_value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  has_confirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customer_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'measures',
  timestamps: false,
});

export default SequelizeMeasure;
