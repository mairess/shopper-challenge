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
Object.defineProperty(exports, "__esModule", { value: true });
class MeasureService {
    constructor(measureModel, geminiService) {
        this.measureModel = measureModel;
        this.geminiService = geminiService;
    }
    uploadMeasure(measureData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingMeasure = yield this.measureModel.findByMonthAndType(measureData.measure_type, measureData.measure_datetime);
            if (existingMeasure) {
                return {
                    status: 'DOUBLE_REPORT',
                    data: {
                        error_code: 'DOUBLE_REPORT',
                        error_description: 'Leitura do mês já realizada',
                    },
                };
            }
            const { imageUrl, measureValue } = yield this.geminiService.uploadAndGenerateContent(measureData.image);
            const measureDataToSend = {
                measure_datetime: measureData.measure_datetime,
                measure_type: measureData.measure_type,
                measure_value: Number(measureValue),
                image_url: imageUrl,
                has_confirmed: false,
            };
            const measure = yield this.measureModel.uploadMeasure(measureDataToSend);
            const measureResponse = {
                image_url: measure.image_url,
                measure_value: Number(measure.measure_value),
                measure_uuid: measure.measure_uuid,
            };
            return {
                status: 'SUCCESSFUL',
                data: measureResponse,
            };
        });
    }
}
exports.default = MeasureService;
