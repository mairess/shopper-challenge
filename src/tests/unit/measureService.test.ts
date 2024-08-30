import { expect } from 'chai';
import sinon from 'sinon';
import SequelizeMesure from '../../database/models/SequelizeMesure';
import MeasureModel from '../../models/MeasureModel';
import IMeasureRequest from '../../interfaces/IMeasureRequest';
import GeminiService from '../../services/GeminiService';
import MeasureService from '../../services/MeasureService';
import IMeasureConfirmRequest from '../../interfaces/IMeasureConfirmRequest';


const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const geminiService = new GeminiService(GEMINI_API_KEY);
const measureModel = new MeasureModel();
const measureService = new MeasureService(measureModel, geminiService);

const mockReturnCreate = {
  image_url:  "https://generativelanguage.googleapis.com/v1beta/files/6twiqwv7ul58",
  measure_value: 110,
  measure_uuid: '95664746-b2-bdf95f1dce0b',
} 

describe('MeasureService', function() {

  describe('Verify confirmMeasure error', function() {
    it("Returns MEASURE_NOT_FOUND.", async function () {
      sinon.stub(SequelizeMesure, 'findByPk').resolves(null)

      const parameters = {
        measure_uuid: '94664746-b2b6-48d2-beb8-cdf95f1dce0b',
        confirmed_value: 500,
      }

    const serviceResponse = await measureService.confirmMeasure(parameters as IMeasureConfirmRequest);

    expect(serviceResponse.status).to.eq('MEASURE_NOT_FOUND');
    expect(serviceResponse.data).to.be.an('object').that.includes.keys('error_code', 'error_code');

    })
  });

});