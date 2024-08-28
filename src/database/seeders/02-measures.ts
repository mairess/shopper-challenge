import { QueryInterface } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'measures',
      [
        {
          measure_uuid: uuidv4(),
          measure_datetime: new Date(),
          measure_type: 'WATER',
          measure_value: 123,
          image_url: 'http://example.com/image1.jpg',
          has_confirmed: false,
        },
        {
          measure_uuid: uuidv4(),
          measure_datetime: new Date(),
          measure_type: 'GAS',
          measure_value: 678.90,
          image_url: 'http://example.com/image2.jpg',
          has_confirmed: true,
        },
        {
          measure_uuid: uuidv4(),
          measure_datetime: new Date(),
          measure_type: 'WATER',
          measure_value: 234,
          image_url: 'http://example.com/image3.jpg',
          has_confirmed: false,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('measures', {});
  },
};
