import { Request, Response, Express, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function auth(req: Request, res: Response, next: NextFunction) {
    next();
    if (false) {
        const { authorization } = req.headers;
        if (!authorization || authorization !== '1_J') {
            return res.status(401).send('Unauthorized: No valid authorization header provided');
        }
        next();
    }
}



