import { Request, Response } from 'express';

export const getError = (req: Request, res: Response) => {
    res.render('error');
};