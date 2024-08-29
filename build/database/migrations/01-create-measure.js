"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('measures', {
            measure_uuid: {
                allowNull: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
            },
            measure_datetime: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
            },
            measure_type: {
                allowNull: false,
                type: sequelize_1.DataTypes.ENUM('WATER', 'GAS'),
            },
            measure_value: {
                allowNull: false,
                type: sequelize_1.DataTypes.FLOAT,
            },
            image_url: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            has_confirmed: {
                allowNull: false,
                type: sequelize_1.DataTypes.BOOLEAN,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('measures');
    }
};
