import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get('/login', AuthController.login);

export = router;
// AuthController.lo
// new AuthController().login();
// route.get('/toto', AuthController.lo);
