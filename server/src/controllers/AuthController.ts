import { Request, Response } from 'express';
import { db } from '../database/database';

export default class AuthController {
    public static login(req: Request, res: Response) {
        db.query('INSERT INTO user VALUES (DEFAULT,"toto","toto","ezreezz")');
    }
}