import { Model, QueryInterface, DataTypes } from 'sequelize'; 
import { Measure } from '../../types/Measure';
export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Measure>>('measures', { 
      measure_uuid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      measure_datetime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      measure_type: {
        allowNull: false,
        type: DataTypes.ENUM('WATER', 'GAS'),
      },
      measure_value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      image_url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      has_confirmed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      }
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('measures') 
  } 
};