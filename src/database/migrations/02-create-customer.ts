import { Model, QueryInterface, DataTypes } from 'sequelize'; 
import { Customer } from '../../types/Customer';
export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Customer>>('customers', { 
      customer_code: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('customers') 
  } 
};