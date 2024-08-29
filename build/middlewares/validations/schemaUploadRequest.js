"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schemaUploadRequest = joi_1.default.object({
    image: joi_1.default.string().base64().required(),
    customer_code: joi_1.default.string().required(),
    measure_datetime: joi_1.default.date().required(),
    measure_type: joi_1.default.string().valid('WATER', 'GAS').required(),
})
    .messages({
    'any.required': 'All fields must be filled.',
    'string.empty': 'All fields must be filled.',
});
exports.default = schemaUploadRequest;
