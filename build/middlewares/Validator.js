"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateUploadMeasure_1 = __importDefault(require("./validations/validateUploadMeasure"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class Validator {
    static validateUploadMeasure(req, res, next) {
        const error = (0, validateUploadMeasure_1.default)(req.body);
        if (error) {
            return res
                .status((0, mapStatusHTTP_1.default)(error.status))
                .json({
                error_code: 'INVALID_DATA',
                error_description: error.data.message,
            });
        }
        next();
    }
}
exports.default = Validator;
