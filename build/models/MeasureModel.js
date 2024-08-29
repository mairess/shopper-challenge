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
/* eslint-disable max-lines-per-function */
const SequelizeMesure_1 = __importDefault(require("../database/models/SequelizeMesure"));
class MeasureModel {
    constructor() {
        this.model = SequelizeMesure_1.default;
    }
    uploadMeasure(measureData) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedMeasure = yield this.model.create({
                measure_datetime: measureData.measure_datetime,
                measure_type: measureData.measure_type,
                measure_value: measureData.measure_value,
                image_url: measureData.image_url,
                has_confirmed: measureData.has_confirmed,
            });
            console.log({
                measure_datetime: savedMeasure.measure_datetime,
                measure_type: savedMeasure.measure_type,
                measure_value: savedMeasure.measure_value,
                image_url: savedMeasure.image_url,
                has_confirmed: savedMeasure.has_confirmed,
            });
            return {
                image_url: savedMeasure.dataValues.image_url,
                measure_value: savedMeasure.dataValues.measure_value,
                measure_uuid: savedMeasure.dataValues.measure_uuid,
            };
        });
    }
}
exports.default = MeasureModel;
