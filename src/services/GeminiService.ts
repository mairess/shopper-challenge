/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';
import * as fs from 'fs';
import base64ToBuffer from '../utils/base64ToBuffer';
import extractMimeType from '../utils/extractMimeType';

class GeminiService {
  private genAI: GoogleGenerativeAI;

  private model: GenerativeModel;

  private fileManager: GoogleAIFileManager;
  
  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    this.fileManager = new GoogleAIFileManager(apiKey);
  }

  public async uploadAndGenerateContent(base64Image: string): Promise<{ imageUrl: string, measureValue: string }> {
    try {
      const buffer = base64ToBuffer(base64Image);
      const mimeType = extractMimeType(base64Image);
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');

      const tempFilePath = '../../temp';
      fs.writeFileSync(tempFilePath, buffer);

      const uploadResponse = await this.fileManager.uploadFile(tempFilePath, {
        mimeType,
        displayName: 'Uploaded image',
      });

      fs.unlinkSync(tempFilePath);

      const result = await this.model.generateContent([
        {
          inlineData: {
            data: base64Data,
            mimeType,
          },
        },
        { text: 'Extract and return the exact numeric consumption value from the water/gas meter shown in this image. Nothing but number.' },
      ]);

      return {
        imageUrl: uploadResponse.file.uri,
        measureValue: result.response.text(),
      };
    } catch (error) {
      console.error('Erro ao processar imagem na API do Google API:', error);
      throw new Error('Não foi possível processar a imagem no momento. Tente novamente mais tarde.');
    }
  }
}

export default GeminiService;