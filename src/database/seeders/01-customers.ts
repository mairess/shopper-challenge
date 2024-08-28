import { QueryInterface } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'customers',
      [
        {
            customer_code: uuidv4(),
            name: 'Rebeca Biles',
          },
          {
            customer_code: uuidv4(),
            name: 'Simone Andrade',
          }
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('customers', {});
  },
};
