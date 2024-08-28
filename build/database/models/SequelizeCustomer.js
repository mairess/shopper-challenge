"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const SequelizeMesure_1 = __importDefault(require("./SequelizeMesure"));
class SequelizeCustomer extends sequelize_1.Model {
}
SequelizeCustomer.init({
    customer_code: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'customers',
    timestamps: false,
});
SequelizeMesure_1.default.belongsTo(SequelizeCustomer, { foreignKey: 'measure_uuid', as: 'measure' });
SequelizeCustomer.hasMany(SequelizeMesure_1.default, { foreignKey: 'measure_uuid', as: 'measure' });
exports.default = SequelizeCustomer;
