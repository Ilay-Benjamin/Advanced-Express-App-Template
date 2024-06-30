import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} request for '${req.url}'`);
    fs.appendFile(path.join(__dirname, '../../../app.log'), `${req.method} request for '${req.url}'\n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    })
    next();
}
