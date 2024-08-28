"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('customers', {
            customer_code: {
                allowNull: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
            },
            name: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('customers');
    }
};
