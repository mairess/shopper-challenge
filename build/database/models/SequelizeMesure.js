"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class SequelizeMeasure extends sequelize_1.Model {
}
SequelizeMeasure.init({
    measure_uuid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    measure_datetime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    measure_type: {
        type: sequelize_1.DataTypes.ENUM('WATER', 'GAS'),
        allowNull: false,
    },
    measure_value: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    has_confirmed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'measures',
    timestamps: false,
});
exports.default = SequelizeMeasure;
