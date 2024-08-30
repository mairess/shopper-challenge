import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'customers',
      [
        {
            customer_code: "PGO-004",
            name: 'Rebeca Biles',
          },
          {
            customer_code: 'XTU-025',
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
