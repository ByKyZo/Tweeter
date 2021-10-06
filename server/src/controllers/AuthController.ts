import { Request, Response } from 'express';
import { db } from '../database/database';
import validator from 'validator';

// poser question s'il faut envoyer le details des erreurs du back vers le front , ou juste bloquer si erreur

export default class AuthController {
    public static login(req: Request, res: Response) {
        db.query('INSERT INTO user VALUES (DEFAULT,"toto","toto","ezreezz")');
    }

    public static register(req: Request, res: Response) {
        const { firstName, lastName, email, password } = req.body;
        // try {

        // } catch {

        // }
        // try {

        // } catch {

        // }
        // try {

        // } catch {

        // }
        if (
            !validator.isLength(firstName, { min: 2, max: 30 }) ||
            !validator.isLength(lastName, { min: 2, max: 30 }) ||
            !validator.isEmail(email) ||
            !validator.isLength(password, { min: 4, max: 50 })
        ) {
            res.status(400).send({ error: 'sign up error' });
            return;
        }

        db.query(
            'INSERT INTO user VALUES (DEFAULT, ? , ? , ? , ? )',
            [firstName, lastName, email, password],
            (error) => {
                if (error) {
                    console.log('query error : ', error);
                } else {
                    console.log('query success !');
                }
            }
        );

        res.status(201).send({ firstName, lastName, email, password });
    }
}
