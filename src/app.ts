import express from 'express';
import cors from 'cors';
import router from './routes';
import 'express-async-errors';
import errorMiddleware from './middlewares/errorMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(cors());

    this.config();

    this.routes();

    this.app.get('/', (req, res) => res.json({ message: 'Application is up! 🚀' }));

    this.app.use(errorMiddleware);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json({ limit: '20mb' }));
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT} 🚀`));
  }
}

export default App;
