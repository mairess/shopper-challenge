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
const uuid_1 = require("uuid");
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('measures', [
            {
                measure_uuid: (0, uuid_1.v4)(),
                measure_datetime: new Date(),
                measure_type: 'WATER',
                measure_value: 123,
                image_url: 'http://example.com/image1.jpg',
                has_confirmed: false,
            },
            {
                measure_uuid: (0, uuid_1.v4)(),
                measure_datetime: new Date(),
                measure_type: 'GAS',
                measure_value: 678.90,
                image_url: 'http://example.com/image2.jpg',
                has_confirmed: true,
            },
            {
                measure_uuid: (0, uuid_1.v4)(),
                measure_datetime: new Date(),
                measure_type: 'WATER',
                measure_value: 234,
                image_url: 'http://example.com/image3.jpg',
                has_confirmed: false,
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('measures', {});
    }),
};
