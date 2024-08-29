"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const sequelize_1 = require("sequelize");
const SequelizeMesure_1 = __importDefault(require("../database/models/SequelizeMesure"));
class MeasureModel {
    constructor() {
        this.model = SequelizeMesure_1.default;
    }
    uploadMeasure(measureData) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedMeasure = yield this.model.create(measureData);
            return {
                image_url: savedMeasure.dataValues.image_url,
                measure_value: savedMeasure.dataValues.measure_value,
                measure_uuid: savedMeasure.dataValues.measure_uuid,
            };
        });
    }
    findByMonthAndType(measure_type, measure_datetime) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date(measure_datetime);
            const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const measure = yield this.model.findOne({
                where: {
                    measure_type,
                    measure_datetime: {
                        [sequelize_1.Op.between]: [startOfMonth, endOfMonth],
                    },
                },
            });
            return measure;
        });
    }
}
exports.default = MeasureModel;
