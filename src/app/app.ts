import express, { Application } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { logger } from './middlewares/logger.middleware';
import homeRoutes from './routes/home.routes';
import errorRoutes from './routes/error.routes';
import loginRoutes from './routes/login.routes';
import profileRoutes from './routes/profile.routes';
import SpecialRoutes from './routes/special.routes';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createApp = (): Application => {
    const app = express();
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(logger);
    app.use(express.static(path.join(__dirname, '../../public')));
    app.use('/', homeRoutes);
    app.use('/', errorRoutes);
    app.use('/', loginRoutes);
    app.use('/', profileRoutes);
    app.use('/', SpecialRoutes);
    return app;
}
